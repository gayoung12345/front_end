/*
함수 선언 방법 1
function 함수명(매개변수) {
  return(
    실행문
  );
};
// 함수 선언 방법 2
const 함수명 = (매개변수) => {
  return (
    실행문
  );
};
*/
/*
// 94p
import { useState } from "react"; // useState: State(컴포넌트 상태표현)를 사용할 수  있게 해주는 함수. return값은 array

const Child = ({ state, action }: any) => {
  return (
    <button type="button" onClick={action}>
      {state}
    </button>
  );
};

const App = () => {
  const [number, setNumber] = useState(0);
  const increase = () => setNumber(number + 1);

  return <Child state={number} action={increase} />;
};

export default App;
*/
/*
// 97p
import { useState } from "react";

const Child = ({ state }: any) => {
  return <button type="button">{state}</button>;
};

const App = () => {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);

  const handleChange = () => {
    setNumber1((prev) => prev + 2);
    setNumber2((prev) => prev + 3);
  };

  return (
    <div>
      <Child state={number1} />
      <Child state={number2} />
      <button type="button" onClick={handleChange}>
        변경하기
      </button>
    </div>
  );
};

export default App;
*/
/*
import { useEffect, useState } from "react";

const useButtonClickCount = (): [number, () => void] => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((prev) => prev + 1);
  };

  return [count, handleClick];
};
const App = () => {
  const [count, handleClick] = useButtonClickCount();

  return (
    <div>
      <p>현재 버튼을 클릭한 횟수는 {count}회 입니다.</p>
      <button type="button" onClick={handleClick}>
        클릭하기
      </button>
    </div>
  );
};

export default App;
*/
/*
const [변수명, set 변수명] = useState(초기값);
useEffect(()=>{},)          // 컴포넌트가 랜더링 될 때 마다 실행(반복실행)
useEffect(()=>{},[])        // 최초 1회만 실행
useEffect(()=>{},[변수명])  // 변수값이 변화가 생길 때 마다 실행
*/
interface ProductType {
  id: number;
  name: string;
  explanation: string;
  price: number;
}
function App() {
  // 서버 구동 시 불필요
  const products: ProductType[] = [
    {
      id: 0,
      name: "Iphone 15 Max",
      explanation: "아이폰 설명을 적어줍니다.",
      price: 1230000,
    },
    {
      id: 1,
      name: "Ipad pro",
      explanation: "아이패드 설명을 적어줍니다.",
      price: 1500000,
    },
  ];
  console.log(products);

  return (
    <>
      {products.map((products) => (
        <div>
          <div>{products.id}</div>
          <div>{products.name}</div>
          <div>{products.explanation}</div>
          <div>{products.price}</div>
        </div>
      ))}

      <h1>쇼핑몰 앱 만들어보기</h1>

      <h1>{products[0].id}</h1>
      <h1>{products[0].name}</h1>
      <h1>{products[0].explanation}</h1>
      <h1>{products[0].price}</h1>
    </>
  );
}
export default App;
