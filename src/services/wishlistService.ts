"use client";

import { Product } from "@/models/product";
import UserService from "./userService";

const getWishlist = async (): Promise<Product[] | null> => {
  const token = UserService.getToken();

  const response = await fetch(
    "https://api-mystore.onrender.com/wishlist/getWishlist",
    {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    }
  );
  if (!response.ok) {
    return null;
  }
  return await response.json();
};

const WishlistService = { getWishlist };
export default WishlistService;
