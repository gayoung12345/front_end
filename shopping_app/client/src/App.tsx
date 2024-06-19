import { useState } from "react";
import { useRef } from "react";
import "./components/style.scss";
import { ProductType } from "./interface";
import ProductItem from "./components/productItem";

const App = () => {
  // 서버 구동시 불필요

  const [products, setProducts] = useState<ProductType[]>([
    {
      id: 0,
      name: "Iphone 15 Max",
      explanation: "아이폰 설명을 적어줍니다.",
      price: 1230000,
    },
    {
      id: 1,
      name: "Ipad Pro",
      explanation: "아이패드 설명을 적어줍니다.",
      price: 1500000,
    },
  ]);

  const [name, setName] = useState("");
  const [explanation, setExplanation] = useState("");
  const [price, setPrice] = useState(0);
  const fakeId = useRef(0);

  /* 상품 만들기 */

  const handleCreate = (newProduct: Omit<ProductType, "id">) => {
    fakeId.current += 1;
    setProducts([...products, { id: fakeId.current, ...newProduct }]);
  };

  /* 상품 삭제하기 */

  const handleDelete = (id: number) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  /* 상품 수정하기 */

  const handleUpdate = (updateProduct: ProductType) => {
    setProducts(
      products.map((product) =>
        product.id === updateProduct.id ? updateProduct : product
      )
    );
  };

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault(); // 안적어주면 새로고침했을때 등록된내용 다 사라짐
          handleCreate({ name, explanation, price });
        }}
      >
        <input
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="상품명"
        />
        <input
          onChange={(e) => setExplanation(e.target.value)}
          type="text"
          placeholder="상품설명"
        />
        <input
          onChange={(e) => setPrice(parseInt(e.target.value, 10))} // 정수로 바꾸고 10진수 형태로 표현할거임.
          type="number"
          placeholder="상품가격"
        />
        <input type="submit" value="상품등록" />
      </form>
      {products.map((product) => (
        <ProductItem
          key={product.id}
          product={product}
          onDelete={handleDelete}
          onUpdate={handleUpdate}
        />
      ))}
    </>
  );
};

export default App;
