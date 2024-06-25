import { CircularProgress, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { ProductType } from "../type";
import ProductItem from "./ProductItem";

const ProductList = () => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  // 상품 삭제
  const handleDelete = (id: string) => {
    fetch(`/product/${id}`, { method: "DELETE" }).then((res) => {
      if (res.ok) {
        setProducts(products.filter((product) => product.id !== id));
      }
    });
  };

  // 상품수정
  const handleUpdate = (updateProduct: ProductType) => {
    fetch(`/product/${updateProduct.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateProduct),
    }).then((res) => {
      if (res.ok) {
        setProducts(
          products.map((product) =>
            product.id === updateProduct.id ? updateProduct : product
          )
        );
      }
    });
  };

  useEffect(() => {
    setIsLoading(true);
    fetch("/product")
      .then((res) => res.json())
      .then((data) => setProducts(data.products))
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading)
    return (
      <CircularProgress sx={{ position: "fixed", left: "50%", top: "50%" }} />
    );

  return (
    <Grid container spacing={3}>
      {products.map((product) => (
        <ProductItem
          key={product.id}
          product={product}
          onDelete={handleDelete}
          onUpdate={handleUpdate}
        />
      ))}
    </Grid>
  );
};

export default ProductList;
