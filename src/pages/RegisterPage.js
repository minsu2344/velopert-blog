import AuthTemplate from "../components/auth/AuthTemplate";
import RegisterForm from "../modules/containers/auth/RegisterForm";

export default function RegisterPage() {
  return (
    <AuthTemplate>
      <RegisterForm />
    </AuthTemplate>
  )
}