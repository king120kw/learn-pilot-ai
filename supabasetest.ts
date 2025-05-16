import { supabase } from './lib/supabaseClient';

async function signUp(email: string, password: string) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password
  });

  if (error) {
    console.error('Sign-up error:', error.message);
  } else {
    console.log('User signed up:', data.user);
  }
}