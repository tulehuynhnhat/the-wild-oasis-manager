import supabase, { supabaseUrl } from './supabase';

export async function getCabins() {
  const { data, error } = await supabase.from('cabins').select('*');

  if (error) {
    console.error(error);
    throw new Error('Cabins could not be loaded');
  }

  return data;
}

export async function createEditCabin(newCabin, id) {
  const hasImagePath = newCabin.image?.startsWith?.(supabaseUrl);

  const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll('/', '');

  const imagePath = hasImagePath
    ? newCabin.image
    : `${supabaseUrl}/storage/v1/object/public/cabin-images//${imageName}`;

  // 1.Create cabin
  let query = supabase.from('cabins');

  // A) CREATE
  if (!id) query = query.insert([{ ...newCabin, image: imagePath }]);

  // B) EDIT
  if (id) query = query.update({ ...newCabin, image: imagePath }).eq('id', id);

  const { data, error } = await query;

  if (error) {
    console.error(error);
    throw new Error('Cabin could not be created');
  }

  // 2. Upload image
  if (hasImagePath) return data;

  const { error: storageError } = await supabase.storage
    .from('cabin-images')
    .upload(imageName, newCabin.image);

  //3. Delete the cabin IF there was an error uploading image
  if (storageError) {
    await supabase.from('cabins').delete().eq('id', data.id);

    console.error(storageError);
    throw new Error('Cabin image could not be uploaded and the cabin was not be created');
  }

  return data;
}

// export async function deleteCabin(id) {
//   const { error } = await supabase.from('cabins').delete().eq('id', id);

//   if (error) {
//     console.error(error);
//     throw new Error('Cabin could not be deleted');
//   }
// }

export async function deleteCabin(id) {
  // 1. get cabin id and image name
  const { data: cabin, error: readCabinError } = await supabase
    .from('cabins')
    .select('*')
    .eq('id', id);

  if (readCabinError) {
    console.error(readCabinError);
    throw new Error('Cabin id not founded');
  }

  const imageName = cabin[0]?.image?.split('/').slice(-1)[0];
  const backupCabin = cabin[0];

  // 2. delete cabin
  const { error: deleteCabinError } = await supabase.from('cabins').delete().eq('id', id);

  if (deleteCabinError) {
    console.error(deleteCabinError);
    throw new Error('Cabin could not be deleted');
  }

  // 3. delete image
  if (imageName) {
    const { error: deleteImageError } = await supabase.storage
      .from('cabin-images')
      .remove([imageName]);

    //If delete image failed then throw error and revert cabin data
    if (deleteImageError) {
      await createEditCabin(backupCabin);

      console.error(deleteImageError);
      throw new Error(
        'Cabin image could not be deleted while deleting cause the cabin did not get deleted'
      );
    }
  }
}
