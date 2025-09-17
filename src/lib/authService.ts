import { supabase } from "@/lib/supabase";
import { SignupResponse } from "@/types/api/signup";

export const authService = {
  resend: async (...args: Parameters<typeof supabase.auth.resend>) => {
    return supabase.auth.resend(...args);
  },

  signOut: async (...args: Parameters<typeof supabase.auth.signOut>) => {
    return supabase.auth.signOut(...args);
  },

  signInWithPassword: async (
    ...args: Parameters<typeof supabase.auth.signInWithPassword>
  ) => {
    return supabase.auth.signInWithPassword(...args);
  },

  signInWithOAuth: async (
    ...args: Parameters<typeof supabase.auth.signInWithOAuth>
  ) => {
    return supabase.auth.signInWithOAuth(...args);
  },

  signUp: async ({
    email,
    password,
    name,
  }: {
    email: string;
    password: string;
    name: string;
  }) => {
    // See endpoint comment for details on Supabase signup behavior
    const response = await fetch("/api/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password, name }),
    });

    const result: SignupResponse = await response.json();
    return result;
  },

  getSession: async (...args: Parameters<typeof supabase.auth.getSession>) => {
    return supabase.auth.getSession(...args);
  },
};
