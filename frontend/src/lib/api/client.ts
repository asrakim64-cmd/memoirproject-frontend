import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://fqpizscquprqqubsaymq.supabase.co';

const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJ6cXBpemN..." ;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);