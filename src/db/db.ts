import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = "https://iedsbbbuvdjgpwowucro.supabase.co";
const ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImllZHNiYmJ1dmRqZ3B3b3d1Y3JvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzU3OTcyMDAsImV4cCI6MTk5MTM3MzIwMH0.WObkUxD0vIt4tAmhLxuaLDjTKZh05rE9xh-G6ncy9ew";

export const supabase = createClient(SUPABASE_URL, ANON_KEY)

