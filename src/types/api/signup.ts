import { AuthError, User } from "@supabase/supabase-js";

export type SignupRequestBody = {
  email: string;
  password: string;
  name: string;
};

export type SignupResponse =
  | {
      data: {
        user: User | null;
      };
      error: null;
    }
  | {
      data: {
        user: null;
      };
      error: AuthError;
    };
