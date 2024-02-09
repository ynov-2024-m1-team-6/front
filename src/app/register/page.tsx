"use client";

import Button from "@/components/button";
import Input from "@/components/input";
import connectionValidators from "@/services/validators/connectionValidator";
import { useState } from "react";

export default function Index() {
  const [email, setEmail] = useState<string>();
  const [firstname, setFirstname] = useState<string>();
  const [lastname, setLastname] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [error, setError] = useState<string | null>();

  const onSubmit = () => {
    const error = connectionValidators.isRegisterFormValid({
      firstname,
      lastname,
      email,
      password,
    });

    if (!error) {
      console.log("call to api with params:");
      console.log(`email: ${email}`);
      console.log(`firstname: ${firstname}`);
      console.log(`lastname: ${lastname}`);
      console.log(`password: ${password}`);
    }
    setError(error);
  };

  return (
    <div className="flex min-h-screen flex-col justify-center px-6 py-12 lg:px-8">
      <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-3" action="#" method="POST">
          <div className="flex gap-3 justify-between">
            <Input title="Prénom" name="firstname" onChange={setFirstname} />
            <Input title="Nom" name="lastname" onChange={setLastname} />
          </div>
          <Input title="Email" name="email" onChange={setEmail} />
          <Input title="Mot de passe" name="password" onChange={setPassword} />
          <Button title="S'inscrire" onClick={onSubmit} />
        </form>
        {error && <p className="text-red-600">{error}</p>}
        <p className="mt-5 text-center text-sm text-gray-500">
          <a
            href="/"
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500 ml-2"
          >
            Se connecter
          </a>
        </p>
      </div>
    </div>
  );
}
