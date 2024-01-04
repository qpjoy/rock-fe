// @ts-nocheck
// import { createClient } from "@supabase/supabase-js";

// export const supabaseUrl = "https://dclaevazetcjjkrzczpc.supabase.co";
// const supabaseKey =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRjbGFldmF6ZXRjamprcnpjenBjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODMyOTIzNDQsImV4cCI6MTk5ODg2ODM0NH0.LGg0M-taoHgKtxCzr9owrb09epnPaO_Yfz6xVE54sIY";
// const supabase = createClient(supabaseUrl, supabaseKey);

// export default supabase;

import { createClient } from '@supabase/supabase-js'

export const supabaseUrl = 'https://hlbabttsjpsnqqfoalaw.supabase.co'
// const supabaseKey = process.env.SUPABASE_KEY
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhsYmFidHRzanBzbnFxZm9hbGF3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTc5MDAzMTIsImV4cCI6MjAxMzQ3NjMxMn0.0j4VgEc5ie0qR4rFnzU3hmiTnKCZnJdH_xTQQm7nom8'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;
