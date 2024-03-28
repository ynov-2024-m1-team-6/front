"use client";

import Button from "@/components/button";
import Input from "@/components/input";
import Footer from "@/layout/footer";
import NavBar from "@/layout/navbar";
import { User } from "@/models/user";
import { useAppSelector } from "@/redux/hooks";
import ProductService from "@/services/productService";
import UserService from "@/services/userService";
import AddressValidator from "@/services/validators/addressValidator";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Index() {
  const router = useRouter();
  const [step, setStep] = useState<number>(0);
  const [user, setUser] = useState<User | null>();
  const [shippingHome, setShippingHome] = useState<boolean>(true);
  const [isModifyingUserAddress, setIsModifyingUserAddress] =
    useState<boolean>();
  const [address, setAddress] = useState<string>();
  const [city, setCity] = useState<string>();
  const [zipCode, setZipCode] = useState<string>();
  const [error, setError] = useState<string | null>();
  const cart = useAppSelector((state: any) => state.panier.items);

  const getUser = async () => {
    const user = await UserService.getMe();
    if (!user) {
      router.push("login?next=command");
    }

    setUser(user);
  };

  useEffect(() => {
    getUser();
  }, []);

  useEffect(() => {
    if (!isModifyingUserAddress && shippingHome) {
      setError(
        AddressValidator.isValidAdress(user?.adress, user?.city, user?.city)
      );
    } else {
      setError(AddressValidator.isValidAdress(address, city, zipCode));
    }
  }, [
    address,
    city,
    zipCode,
    shippingHome,
    isModifyingUserAddress,
    user?.adress,
    user?.city,
    user?.zipCode,
  ]);

  useEffect(() => {
    setAddress(user?.adress);
    setZipCode(user?.zipCode);
    setCity(user?.city);
  }, [user]);

  const goToStrapi = async () => {
    const id = await ProductService.getProductsById(cart);

    if (!id) {
      setError("Une erreur s'est produite");
      return;
    }

    console.log({
      id,
      address: {
        address,
        zipCode,
        city,
      },
      mail: user?.mail,
    });
  };

  return (
    <>
      <NavBar />
      <div className="flex justify-center items-center m-10">
        <div
          className={`w-3/4 ${
            step === 0 ? "h-96" : "h-16"
          } border border-black ease-in duration-300 py-2 px-4`}
        >
          {step === 0 ? (
            <div className="flex flex-col h-full justify-between">
              <div>
                <h2 className="font-bold">Livraison</h2>
                <ul>
                  <li>
                    <input
                      type="radio"
                      id="home"
                      name="shipping"
                      checked={shippingHome}
                      onChange={() => setShippingHome(true)}
                    />
                    <label className="pl-1" htmlFor="home">
                      A domicile
                    </label>
                  </li>
                  {shippingHome && (
                    <div>
                      <div className="flex gap-2 items-end">
                        {!isModifyingUserAddress && (
                          <p>
                            {user?.adress}, {user?.city}, {user?.zipCode}
                          </p>
                        )}
                        <p
                          className="text-sm text-blue-500 underline cursor-pointer"
                          onClick={() =>
                            setIsModifyingUserAddress(!isModifyingUserAddress)
                          }
                        >
                          {isModifyingUserAddress ? "Annuler" : "Modifier"}
                        </p>
                      </div>
                      {isModifyingUserAddress && (
                        <div>
                          <Input
                            title="Adresse"
                            name="address"
                            onChange={setAddress}
                          />
                          <Input title="Ville" name="city" onChange={setCity} />
                          <Input
                            title="Code postal"
                            name="zipCode"
                            onChange={setZipCode}
                          />
                        </div>
                      )}
                    </div>
                  )}
                  <li>
                    <input
                      type="radio"
                      id="street"
                      name="shipping"
                      checked={!shippingHome}
                      onChange={() => setShippingHome(false)}
                    />
                    <label className="pl-1" htmlFor="street">
                      Dans la street
                    </label>
                  </li>
                  {!shippingHome && (
                    <>
                      <Input
                        title="Adresse"
                        name="address"
                        onChange={setAddress}
                      />
                      <Input title="Ville" name="city" onChange={setCity} />
                      <Input
                        title="Code postal"
                        name="zipCode"
                        onChange={setZipCode}
                      />
                    </>
                  )}
                </ul>
              </div>
              <div className="flex justify-between">
                <p className="text-red-500">{error}</p>
                <div className="w-fit">
                  <Button
                    title="Payer"
                    onClick={() => goToStrapi()}
                    disabled={error ? true : false}
                  />
                </div>
              </div>
            </div>
          ) : (
            <div className="flex items-center h-12 justify-between">
              <h2>
                <em>Livraison:</em> 12 rue Anatole France
              </h2>
              <p
                className="text-blue-500 underline cursor-pointer"
                onClick={() => setStep(0)}
              >
                Modifier
              </p>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
