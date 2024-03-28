"use client";

import Card from "@/components/card";
import Footer from "@/layout/footer";
import NavBar from "@/layout/navbar";
import { Command } from "@/models/command";
import { Product } from "@/models/product";
import CommandService from "@/services/commandService";
import ProductService from "@/services/productService";
import UserService from "@/services/userService";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Index() {
  const router = useRouter();
  const [isConnected, setIsConnected] = useState<Boolean>(false);
  const [isLoading, setIsLoading] = useState<Boolean>(true);
  const [command, setCommand] = useState<Command | null>();
  const params = useParams();
  const searchParams = useSearchParams();
  const commandId = searchParams.get("id") ?? "";

  const getCommand = async () => {
    try {
      const commandFromCall = await CommandService.getFilteredCommands(
        "orderNumber",
        commandId
      );

      if (commandFromCall) {
        setCommand(commandFromCall[0]);
      } else {
        router.push("/");
      }
    } catch (error) {
      setCommand(null);
    }
  };

  useEffect(() => {
    setIsConnected(!!UserService.currentUser());
    setIsLoading(false);
  }, []);

  useEffect(() => {
    if (!isLoading && !isConnected) {
      router.push("/login");
    }
    if (!commandId) {
      router.push("/");
    }
    getCommand();
  }, [isConnected, router, isLoading]);

  return (
    <>
      <NavBar />
      <div className="h-screen flex flex-col gap-4 justify-center items-center">
        <p className="text-xl font-bold">La commande est validé !</p>
        <div className="flex flex-wrap justify-center items-center gap-3">
          {command &&
            command.products.map((product) => {
              return (
                <Card product={product} key={product.id} isInWishlist={false} />
              );
            })}
        </div>
      </div>
      <Footer />
    </>
  );
}
