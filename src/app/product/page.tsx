"use client";
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

  const getProducts = async () => {
    const products = await ProductService.getProducts();
    if (products) {
      setProducts(products);
    }
  };

  const getWishlist = async () => {
    const wishlist = await WishlistService.getWishlist();
    if (wishlist) {
      setWishlist(wishlist);
    }
  };

  useEffect(() => {
    getProducts();
    getWishlist();
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
                  isInWishlist={
                    wishlist?.some(
                      (wishlistProduct) => wishlistProduct.id === prod.id
                    ) ?? false
                  }
                />
              );
            })}
        </section>
      </div>
      <Footer />
    </>
  );
}
