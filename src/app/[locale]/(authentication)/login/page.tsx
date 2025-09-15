import login from "@/app/assets/images/login.jpeg";
import { LoginForm } from "@/components/authentication/login-form";
import { Frame } from "../_components/frame";

export default function Login() {
  return (
    <Frame image={login}>
      <LoginForm />
    </Frame>
  );
}
