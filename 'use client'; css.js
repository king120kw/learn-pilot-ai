'use client';

import { useState } from 'react';
import { supabase } from '../../lib/supabaseClient';

export default function SignUpPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  // Email/password sign up
  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage('');
    const { error } = await supabase.auth.signUp({ email, password });
    if (error) {
      setMessage(error.message);
    } else {
      setMessage('Check your email for a confirmation link!');
    }
  };

  // Google OAuth sign up
  const handleGoogleSignUp = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
    });
    if (error) {
      setMessage(error.message);
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: 'auto', padding: 24 }}>
      <h2>Sign Up</h2>
      <button
        style={{
          width: '100%',
          padding: 10,
          marginBottom: 16,
          background: '#4285F4',
          color: '#fff',
          border: 'none',
          borderRadius: 4,
          fontWeight: 'bold',
          cursor: 'pointer',
        }}
        onClick={handleGoogleSignUp}
      >
        Sign up with Google
      </button>
      <div style={{ textAlign: 'center', margin: '16px 0' }}>or</div>
      <form onSubmit={handleSignUp}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          required
          onChange={e => setEmail(e.target.value)}
          style={{ width: '100%', padding: 8, marginBottom: 8 }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          required
          onChange={e => setPassword(e.target.value)}
          style={{ width: '100%', padding: 8, marginBottom: 8 }}
        />
        <button
          type="submit"
          style={{
            width: '100%',
            padding: 10,
            background: '#222',
            color: '#fff',
            border: 'none',
            borderRadius: 4,
            fontWeight: 'bold',
            cursor: 'pointer',
          }}
        >
          Sign up with Email
        </button>
      </form>
      {message && (
        <div style={{ marginTop: 16, color: 'red', textAlign: 'center' }}>
          {message}
        </div>
      )}
    </div>
  );
}