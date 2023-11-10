import React from "react";
import { useRouter } from "next/router";
import LoginForm from "./components/loginForm";

const LoginPage = () => {
  const router = useRouter();

  const handleLoginSuccess = () => {
    // Redirect to the main page after successful login
    router.push("/");
  };

  return (
    <div>
      <h1>Login to GitHub</h1>
      <LoginForm onSuccess={handleLoginSuccess} />
    </div>
  );
};

export default LoginPage;
