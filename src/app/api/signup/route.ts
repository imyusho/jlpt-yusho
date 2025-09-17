import { supabaseAdmin } from "@/lib/supabaseAdmin";
import { SignupRequestBody, SignupResponse } from "@/types/api/signup";
import { AuthError } from "@supabase/auth-js";
import { NextResponse } from "next/server";

// supabase.auth.signUp on the frontend doesn’t fail for existing emails like supabaseAdmin.auth.admin.createUser does.
// This means someone could potentially brute-force a list of common emails,
// but the UX is better because users get immediate feedback when an email is already taken.
export async function POST(
  request: Request
): Promise<NextResponse<SignupResponse>> {
  try {
    const body: SignupRequestBody = await request.json();
    const { email, password, name } = body;

    if (!email || !password || !name) {
      return NextResponse.json({
        data: {
          user: null,
        },
        error: new AuthError(
          "Validation failed. Check your input.",
          400,
          "validation_failed"
        ),
      });
    }

    const response = await supabaseAdmin.auth.admin.createUser({
      email,
      password,
      user_metadata: { name },
      email_confirm: false,
    });

    return NextResponse.json(response, { status: response.error ? 500 : 200 });
  } catch {
    return NextResponse.json({
      data: { user: null },
      error: new AuthError(
        "Unexpected error occurred.",
        400,
        "unexpected_failure"
      ),
    });
  }
}
