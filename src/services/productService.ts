import { Product } from "@/models/product";
import UserService from "./userService";

const getProductById = async (
  id: number | string | string[]
): Promise<Product | null> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}products/getProduct?id=${id}`,
    { method: "GET" }
  );
  if (!response.ok) {
    return null;
  }
  const responseJson = await response.json();
  if (!responseJson.data) {
    return null;
  }

  if (!responseJson.data.thumbnail.startsWith("http")) {
    responseJson.data.thumbnail =
      "https://cdn.discordapp.com/attachments/1202607639352053836/1212867428074389565/WosileBG.png?ex=65f365d0&is=65e0f0d0&hm=ddc125acf94fce0de78b8430dfb589581c128300874df5794ed8d5266ad99dc3&";
  }
  return responseJson.data;
};

const getProductsById = async (ids: number[]): Promise<Product[] | null> => {
  let params = "";
  ids.forEach((id, index) => {
    params += `id=${id}`;
    if (index !== ids.length - 1) {
      params += "&";
    }
  });

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}products/getSpecificProduct?${params}`,
    { method: "GET" }
  );
  if (!response.ok) {
    return null;
  }
  const responseJson = await response.json();
  return responseJson.data.map((product: Product) => {
    if (product.thumbnail.startsWith("http")) {
      return product;
    }
    product.thumbnail =
      "https://cdn.discordapp.com/attachments/1202607639352053836/1212867428074389565/WosileBG.png?ex=65f365d0&is=65e0f0d0&hm=ddc125acf94fce0de78b8430dfb589581c128300874df5794ed8d5266ad99dc3&";
    return product;
  });
};

const getProducts = async (
  filterInactive: boolean
): Promise<Product[] | null> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}products/getProducts?filterInactive=${filterInactive}`,
    {
      method: "GET",
    }
  );
  if (!response.ok) {
    return null;
  }
  const responseJson = await response.json();
  return responseJson.data.map((product: Product) => {
    if (product.thumbnail.startsWith("http")) {
      return product;
    }
    product.thumbnail =
      "https://cdn.discordapp.com/attachments/1202607639352053836/1212867428074389565/WosileBG.png?ex=65f365d0&is=65e0f0d0&hm=ddc125acf94fce0de78b8430dfb589581c128300874df5794ed8d5266ad99dc3&";
    return product;
  });
};

const getProductsByCommandId = async (
  commandId: number | string | string[]
): Promise<Product[] | null> => {
  const token = UserService.getToken();

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}product/getProductsByCommandId?commandId=${commandId}`,
    {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    }
  );
  if (!response.ok) {
    return null;
  }
  const responseJson = await response.json();
  return responseJson.map((product: Product) => {
    if (product.thumbnail.startsWith("http")) {
      return product;
    }
    product.thumbnail =
      "https://cdn.discordapp.com/attachments/1202607639352053836/1212867428074389565/WosileBG.png?ex=65f365d0&is=65e0f0d0&hm=ddc125acf94fce0de78b8430dfb589581c128300874df5794ed8d5266ad99dc3&";
    return product;
  });
};

const ProductService = {
  getProductById,
  getProducts,
  getProductsById,
  getProductsByCommandId,
};
export default ProductService;
