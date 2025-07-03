import { createClient } from '@supabase/supabase-js';
export const supabaseUrl = 'https://ntnsryttnkyegqgmlkvc.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im50bnNyeXR0bmt5ZWdxZ21sa3ZjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDkxNzcyNTksImV4cCI6MjA2NDc1MzI1OX0.HHSU_3Ep-qp3J5HfGxXl-ULhfrmZx8-D2fvFAlQU0sY';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
