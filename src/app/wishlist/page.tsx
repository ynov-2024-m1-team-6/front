"use client";

import Card from "@/components/card";
import Footer from "@/layout/footer";
import NavBar from "@/layout/navbar";
import { Product } from "@/models/product";
import UserService from "@/services/userService";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Index() {
  const [products, setProducts] = useState<Product[]>();
  const router = useRouter();

  const getProducts = async () => {
    const response = await fetch(
      "https://api-mystore.onrender.com/wishlist/getWishlist",
      {
        method: "GET",
        headers: { Authorization: `Bearer` },
      }
    );
    if (!response.ok) {
      return null;
    }
    const responseJson = await response.json();
    setProducts(responseJson.data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <NavBar />
      <div className="min-h-screen flex justify-center">
        <section
          id="Projects"
          className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5"
        >
          {products &&
            products.map((prod, index) => {
              return <Card key={index} product={prod} />;
            })}
        </section>
      </div>
      <Footer />
    </>
  );
}
