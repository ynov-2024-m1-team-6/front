"use client";

import { Product } from "@/models/product";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { addToCart, removeFromCart } from "@/redux/panierSlice";
import UserService from "@/services/userService";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import {
  MdOutlineRemoveShoppingCart,
  MdOutlineShoppingCart,
} from "react-icons/md";

interface Props {
  product: Product;
  isInWishlist: boolean;
}

const Card = ({ product, isInWishlist }: Props) => {
  const router = useRouter();
  const cart = useAppSelector((state: any) => state.panier.items);
  const dispatch = useAppDispatch();

  const addToWishlist = async () => {
    const token = UserService.getToken();
    const user = UserService.currentUser();

    if (!user || !token) {
      return;
    }

    const request = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: product.id,
      }),
    };

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}wishlist/addItem`,
      request
    );

    if (response.ok) {
      router.push("/wishlist");
    }
  };

  const removeFromWishlist = async () => {
    const token = UserService.getToken();
    const user = UserService.currentUser();

    if (!user || !token) {
      return;
    }

    const request = {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: product.id,
      }),
    };

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}wishlist/removeItem`,
      request
    );
    if (response.ok) {
      router.push("/product");
    }
  };

  return (
    <div className="relative w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
      <div>
        <a href={`product/${product.id}`}>
          <Image
            src={product.thumbnail}
            alt="Product"
            className="h-80 w-72 object-cover rounded-t-xl"
            width={320}
            height={300}
            priority
          />
        </a>
        <div className="px-4 py-3 w-72">
          <p className="text-lg font-bold text-black truncate block capitalize">
            {product.username}
          </p>
          <p className="text-lg font-bold text-black truncate block capitalize">
            {product.ratio}
          </p>
          <div className="flex items-center">
            <p className="text-lg font-semibold text-black cursor-auto my-3">
              {product.price}€
            </p>
            {cart.some((productId: number) => productId == product.id) ? (
              <div
                onClick={() => {
                  dispatch(removeFromCart(product.id!));
                  router.push("/cart");
                }}
                className="ml-auto cursor-pointer"
              >
                <MdOutlineRemoveShoppingCart />
              </div>
            ) : (
              <div
                onClick={() => dispatch(addToCart(product.id!))}
                className="ml-auto cursor-pointer"
              >
                <MdOutlineShoppingCart />
              </div>
            )}
          </div>
        </div>
      </div>
      {isInWishlist ? (
        <div
          onClick={() => removeFromWishlist()}
          className="absolute top-2 right-2 cursor-pointer"
        >
          <FaHeart width={48} height={48} color="red" />
        </div>
      ) : (
        <div
          onClick={() => addToWishlist()}
          className="absolute top-2 right-2 cursor-pointer"
        >
          <CiHeart width={48} height={48} />
        </div>
      )}
    </div>
  );
};

export default Card;
