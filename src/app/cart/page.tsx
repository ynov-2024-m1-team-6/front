"use client";

import Button from "@/components/button";
import Card from "@/components/card";
import Footer from "@/layout/footer";
import NavBar from "@/layout/navbar";
import { Product } from "@/models/product";
import { useAppSelector } from "@/redux/hooks";
import ProductService from "@/services/productService";
import WishlistService from "@/services/wishlistService";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Index() {
  const router = useRouter();
  const [products, setProducts] = useState<Product[]>();
  const [wishlist, setWishlist] = useState<Product[]>();
  const cart = useAppSelector((state: any) => state.panier.items);

  const getProducts = async () => {
    const cartProducts = await ProductService.getProductsById(cart);
    if (cartProducts) {
      setProducts(cartProducts!);
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
          className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5"
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
        <div className="relative w-1/5 border-l border-black p-2">
          <div className="fixed w-32">
            <p className="text-center">
              {products?.length} produit{products?.length ?? 0 > 1 ? "s" : ""}
            </p>
            <p className="text-center">
              {products
                ?.map((p) => p.price)
                .reduce((partialSum, price) => partialSum + price, 0)}
              €
            </p>
            <Button
              title="Commander"
              onClick={() => router.push("/command")}
              disabled={cart.length <= 0}
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
