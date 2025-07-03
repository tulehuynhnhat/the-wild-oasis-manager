import { useSearchParams } from 'react-router';
import Spinner from '../../ui/Spinner';
import CabinRow from './CabinRow';
import Table from '../../ui/Table';
import Menus from '../../ui/Menus';
import Empty from '../../ui/Empty';
import { useCabin } from './useCabin';

function CabinTable() {
  const [searchParams] = useSearchParams();
  const { cabins, isPending } = useCabin();
  const filterValue = searchParams.get('discount') || 'all';

  // 1) FILTER
  let filteredCabins;
  if (filterValue === 'all') filteredCabins = cabins;

  if (filterValue === 'no-discount')
    filteredCabins = cabins.filter((cabin) => cabin.discount === 0);

  if (filterValue === 'with-discount')
    filteredCabins = cabins.filter((cabin) => cabin.discount > 0);

  // 2) SORT
  let sortBy = searchParams.get('sortBy') || 'startDate-asc';
  let [field, direction] = sortBy.split('-');
  const modifier = direction === 'asc' ? 1 : -1;
  const sortedCabins = filteredCabins?.sort((a, b) => (a[field] - b[field]) * modifier);

  if (isPending) return <Spinner />;
  if (!cabins.length) return <Empty resourceName="cabins" />;

  return (
    <Menus>
      <Table columns="0.6fr 1.8fr 2.2fr 1fr 1fr 1fr">
        <Table.Header>
          <div></div>
          <div>Cabin</div>
          <div>Capacity</div>
          <div>Price</div>
          <div>Discount</div>
          <div></div>
        </Table.Header>
        <Table.Body
          // data={cabins}
          // data={filteredCabins}
          data={sortedCabins}
          render={(cabin) => <CabinRow cabin={cabin} key={cabin.id} />}
        />
      </Table>
    </Menus>
  );
}

export default CabinTable;
