import { Product } from "@/models/product";

const getProductById = async (
  id: string | string[]
): Promise<Product | null> => {
  const response = await fetch(
    `https://back-office-mkrp.onrender.com/products/getProduct?id=${id}`,
    { method: "GET" }
  );
  if (!response.ok) {
    return null;
  }
  const responseJson = await response.json();
  return responseJson.data;
};

const getProducts = async (): Promise<Product[] | null> => {
  const response = await fetch(
    "https://back-office-mkrp.onrender.com/products/getProducts",
    { method: "GET" }
  );
  if (!response.ok) {
    return null;
  }
  const responseJson = await response.json();
  return responseJson.data;
};

const ProductService = { getProductById, getProducts };
export default ProductService;
