import React from "react";
import LoginHero from "../components/login/LoginHero";
import LoginForm from "../components/login/LoginForm";

export default function LoginScreen() {
  return (
    <main className="py-10">
      <div className="container max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 p-4">
        <LoginHero />
        <LoginForm />
      </div>
    </main>
  );
}
