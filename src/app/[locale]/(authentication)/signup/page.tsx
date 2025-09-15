import signup from "@/app/assets/images/signup.jpeg";
import { SignupForm } from "@/components/authentication/signup-form";
import { Frame } from "../_components/frame";

export default function Signup() {
  return (
    <Frame image={signup}>
      <SignupForm />
    </Frame>
  );
}
