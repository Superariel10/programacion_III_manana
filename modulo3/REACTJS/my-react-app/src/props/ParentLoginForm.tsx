import LoginForm from "./LoginForm";

export default function ParentLoginForm() {
  const handleLogin = (data) => console.log("Login exitoso:", data);

  return <LoginForm onLogin={handleLogin} />;
}