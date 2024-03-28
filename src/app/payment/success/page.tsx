"use client";

import Footer from "@/layout/footer";
import NavBar from "@/layout/navbar";
import { Product } from "@/models/product";
import ProductService from "@/services/productService";
import UserService from "@/services/userService";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Index() {
  const router = useRouter();
  const [isConnected, setIsConnected] = useState<Boolean>(false);
  const [isLoading, setIsLoading] = useState<Boolean>(true);
  const [products, setProducts] = useState<Product[]>();
  const params = useParams();

  const getProductsByCommandId = async () => {
    try {
      const productsFromCommand = await ProductService.getProductsByCommandId(
        params.commandId
      );
      if (productsFromCommand) {
        setProducts(productsFromCommand);
      }
    } catch (error) {
      setProducts([]);
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
  }, [isConnected, router, isLoading]);

  return (
    <>
      <NavBar />
      <div className="h-screen flex justify-center items-center">
        <p>La commande est validé !</p>
      </div>
      <Footer />
    </>
  );
}
