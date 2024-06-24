import React, { useState } from "react";
import { ProductType } from "../type";
import { Button, Container, TextField, Typography } from "@mui/material";
import ThumbnailUploader from "./ThumbnailUploader";

const ProductCreateForm = () => {
  // 초기값 설정
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [explanation, setExplanation] = useState("");
  const [thumbnail, setThumbnail] = useState<File | null>(null);

  // 물건 등록
  const handleCreate = (event: React.FormEvent) => {
    event.preventDefault();
    const newProduct: Omit<ProductType, "id"> = {
      name,
      explanation,
      price,
    };
    fetch("/product", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    return setName(event.target.value);
  };

  const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    return setPrice(Number(event.target.value));
  };

  const handleExplanationChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    return setExplanation(event.target.value);
  };

  return (
    <Container maxWidth="sm" sx={{ background: "white" }}>
      <Typography variant="h4" align="center" gutterBottom>
        상품등록
      </Typography>
      <form onSubmit={handleCreate}>
        <TextField
          label="상품명"
          fullWidth
          value={name}
          onChange={handleNameChange}
          margin="normal"
        />

        <TextField
          label="가격"
          fullWidth
          value={price}
          onChange={handlePriceChange}
          margin="normal"
        />

        <TextField
          label="상품 설명"
          fullWidth
          multiline
          rows={5}
          value={explanation}
          onChange={handleExplanationChange}
          margin="normal"
        />
        <ThumbnailUploader
          value={thumbnail}
          onChange={(file) => setThumbnail(file)}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ marginTop: 6 }}
        >
          생성
        </Button>
      </form>
    </Container>
  );
};

export default ProductCreateForm;
