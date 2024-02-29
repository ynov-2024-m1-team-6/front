"use client";

import Button from "@/components/button";
import Input from "@/components/input";
import AuthService from "@/services/authService";
import connectionValidators from "@/services/validators/connectionValidator";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Index() {
  const [email, setEmail] = useState<string>();
  const [firstname, setFirstname] = useState<string>();
  const [name, setName] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [address, setAddress] = useState<string>();
  const [city, setCity] = useState<string>();
  const [zipCode, setZipCode] = useState<string>();
  const [phoneNumber, setPhoneNumber] = useState<string>();
  const [error, setError] = useState<string | null>();
  const router = useRouter();

  const onSubmit = async () => {
    const error = connectionValidators.isRegisterFormValid({
      firstname,
      lastname: name,
      email,
      password,
    });

    if (error) {
      setError(error);
      return;
    }

    try {
      const err = await AuthService.register(
        email!,
        password!,
        firstname!,
        name!,
        address!,
        city!,
        zipCode!,
        phoneNumber!
      );
      if (err) {
        setError(err);
      } else {
        router.push("/");
      }
    } catch {
      setError("Une erreur s'est produite");
    }
  };

  return (
    <div className="flex min-h-screen flex-col justify-center px-6 py-12 lg:px-8">
      <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-3" action="#" method="POST">
          <div className="flex gap-3 justify-between">
            <Input title="Prénom" name="firstname" onChange={setFirstname} />
            <Input title="Nom" name="lastname" onChange={setName} />
          </div>
          <Input title="Email" name="email" onChange={setEmail} />
          <Input title="Mot de passe" name="password" onChange={setPassword} />
          <Input title="Adresse" name="address" onChange={setAddress} />
          <div className="flex gap-3 justify-between">
            <Input title="Ville" name="city" onChange={setCity} />
            <Input title="Code postal" name="zipCode" onChange={setZipCode} />
          </div>
          <Input
            title="Numéro de téléphone"
            name="phoneNumber"
            onChange={setPhoneNumber}
          />
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
