import AuthTemplate from "../components/auth/AuthTemplate";
import LoginForm from "../modules/containers/auth/LoginForm";

export default function LoginPage() {
  return (
    <AuthTemplate>
      <LoginForm />
    </AuthTemplate>
  )
}