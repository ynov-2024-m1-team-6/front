"use client";

import Card from "@/components/card";
import Footer from "@/layout/footer";
import NavBar from "@/layout/navbar";
import { Product } from "@/models/product";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import WishlistService from "@/services/wishlistService";
import ProductService from "@/services/productService";

export default function Index() {
  const [product, setProduct] = useState<Product>();
  const [wishlist, setWishlist] = useState<Product[]>();
  const params = useParams();

  const getProducts = async () => {
    const product = await ProductService.getProductById(params.id);
    if (product) {
      setProduct(product);
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <NavBar />
      {product && (
        <div className="min-h-screen flex justify-center my-10 gap-10">
          <Card
            product={product}
            isInWishlist={
              wishlist?.some(
                (wishlistProduct) => wishlistProduct.id === product.id
              ) ?? false
            }
          />
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
