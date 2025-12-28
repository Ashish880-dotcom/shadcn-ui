"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { IProduct } from "./api/v1/products/route";

export default function ProductListingPage() {
  const [products, setProducts] = useState<IProduct[]>([]);

  const fetchProducts = async () => {
    try {
      const response = await axios.get("/api/v1/products");
      setProducts(response.data.products);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);
 return (
    <>
      {
        products.map((product) => {
          return <div key={product.productId}>{product.name}</div>
        })
      }
    </>
  )

}
