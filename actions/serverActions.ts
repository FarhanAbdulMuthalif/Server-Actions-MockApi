"use server";

import { Product } from "@/app/page";
import { revalidateTag } from "next/cache";

export const addProductToDatabase = async (e: FormData) => {
  const product = e.get("product")?.toString();
  const price = e.get("price")?.toString();
  if (!product || !price) return;
  const newProduct: Product = {
    product,
    price,
  };
  await fetch("https://64d09879ff953154bb792372.mockapi.io/products", {
    method: "POST",
    body: JSON.stringify(newProduct),
    headers: {
      "Content-Type": "application/json",
    },
  });
  revalidateTag("products");
};
