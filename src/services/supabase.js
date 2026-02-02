import { createClient } from '@supabase/supabase-js';
export const supabaseUrl = 'https://jezelqixotlsigejliyn.supabase.co';
const supabaseKey = 'sb_publishable_3DG2S0FKU6jdb6vtZv8vwQ_3aNE399K';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
