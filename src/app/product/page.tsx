'use client'
import Card from "@/components/card";
import Footer from "@/layout/footer";
import NavBar from "@/layout/navbar";
import { Product } from "@/models/product";
import ProductService from "@/services/productService";
import WishlistService from "@/services/wishlistService";
import { useEffect, useState } from "react";

export default function Index() {
  const [products, setProducts] = useState<Product[]>();
  const [wishlist, setWishlist] = useState<Product[]>();
  const [isTokenPresent, setIsTokenPresent] = useState<boolean>(false);
  const [error, setError] = useState("");
   
  const getProducts = async () => {
    try {
      const products = await ProductService.getProducts();
      if (products) {
        setProducts(products);
        setError(""); // Réinitialiser l'erreur si la requête est réussie
      }
    } catch (error) {
      console.error("Failed to fetch products:", error);
      setError("Failed to load products. Please try again later."); // Définir un message d'erreur
      setProducts([]);
    }
  };
  useEffect(() => {
    try {
      const token = localStorage.get("token")  
      setIsTokenPresent(!!token); 
      getProducts();
    } catch (error) {
      console.error("Failed to fetch token:", error);
    }

  

    

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
              return (
                <Card
                  key={index}
                  product={prod}
                  isInWishlist={false}
                />
              );
            })}
        </section>
      </div>
      <Footer />
    </>
  );
}
