/*
함수 선언 방법 1
function App() {
}
*/

import { Fragment } from "react/jsx-runtime";

// 함수 선언 방법 2
const App = () => {
  return (
    // Fragment tag
    <>
      <h1>여기는 쇼핑몰 입니다.</h1>
    </>
  );
};

export default App;
