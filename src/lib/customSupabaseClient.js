import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://dvlheozjacyerdrdwdrm.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR2bGhlb3pqYWN5ZXJkcmR3ZHJtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjAwMjQwODMsImV4cCI6MjA3NTYwMDA4M30.e-LwGm4otlx_7gGAFzBcKU-Bv5z7JtyQM8HQdh4niAM';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);