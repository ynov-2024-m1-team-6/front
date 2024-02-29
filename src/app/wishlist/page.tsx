"use client";

import Card from "@/components/card";
import Footer from "@/layout/footer";
import NavBar from "@/layout/navbar";
import { Product } from "@/models/product";
import UserService from "@/services/userService";
import WishlistService from "@/services/wishlistService";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Index() {
  const [wishlist, setWishlist] = useState<Product[]>();
  const router = useRouter();

  const [isConnected, setIsConnected] = useState<Boolean>(false);
  const [isLoading, setIsLoading] = useState<Boolean>(true);

  const getWishlist = async () => {
    const wishlist = await WishlistService.getWishlist();
    if (wishlist) {
      setWishlist(wishlist);
    }
  };

  useEffect(() => {
    setIsConnected(!!UserService.currentUser());
    setIsLoading(false);

    getWishlist();
  }, []);

  useEffect(() => {
    if (!isLoading && !isConnected) {
      router.push("/login");
    }
  }, [isConnected, router, isLoading]);

  return (
    <>
      <NavBar />
      <h1 className="flex justify-center text-3xl mt-4">Wishlist</h1>
      <div className="min-h-screen flex justify-center">
        <section
          id="Projects"
          className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5"
        >
          {wishlist &&
            wishlist.map((prod, index) => {
              return <Card key={index} product={prod} isInWishlist={true} />;
            })}
        </section>
      </div>
      <Footer />
    </>
  );
}
