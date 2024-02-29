"use client";

import Card from "@/components/card";
import Footer from "@/layout/footer";
import NavBar from "@/layout/navbar";
import { Product } from "@/models/product";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

export default function Index() {
  const [product, setProduct] = useState<Product>();
  const params = useParams();

  const getProducts = async () => {
    const response = await fetch(
      `https://back-office-mkrp.onrender.com/products/getProduct?id=${params.id}`,
      { method: "GET" }
    );
    if (!response.ok) {
      return null;
    }
    const responseJson = await response.json();
    setProduct(responseJson.data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <NavBar />
      {product && (
        <div className="min-h-screen flex justify-center my-10 gap-10">
          <Card product={product} />
          <div className="max-w-[50%]">
            <span className="flex items-center">
              <i className="w-2 h-2 bg-green-600 rounded-full mr-2"></i>
              Disponible
            </span>
            <p>{product.description}</p>
            <p>Taille: {product.height}cm</p>
            <p>Poids: {product.weight}kg</p>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
}
