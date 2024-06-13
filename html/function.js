/*
// 함수 사용X
var num1 = 2;
var num2 = 3;
var sum = num1 + num2;
document.write("결과값은 " + sum);
*/

/*
// 함수 사용O

const j = 10; // 전역변수

function addNumber(a, b) {
  const j = 0; // 지역변수

  var num1 = a;
  var num2 = b;
  var sum = num1 + num2;
  document.write("결과값은 " + sum);
}
*/

// hoisting
/*
var x = 10;
displayNumber(); // 함수 호출
function displayNumber() { // 함수 정의
  console.log("x is " + x); // x is 10
  console.log("y is " + y); // y is undefined
  var y = 20;
  console.log("y is " + y); // y is 20
}
// displayNumber(); // 함수 호출
*/
/*
const x = 10;
const y = 20;
// displayNumber(); // 함수 호출(에러발생)
const displayNumber = () => {
  // 함수 정의(화살표 함수로 정의 할 경우, const는 무조건 상단에 정의해야함)
  return console.log("x is " + x), console.log("y is " + y);
};
displayNumber(); // 함수 호출 (함수 정의 후 호출)
*/
/*
const x = 10;
const y = 20;
displayNumber(); // 함수 호출
const displayNumber = () => // 함수 정의
    console.log("x is " + x), console.log("y is " + y);
    // {return } 생략 가능
*/
/*
// 익명함수 바로 실행 
function(a, b) { 
    return a + b;
}
*/
/*
// 익명함수를 sum이라는 변수에 삽입해서, 변수를 호출 했을때 호출
const sum = function (a, b) {
  return a + b;
};
document.write(sum(10, 20));
*/
/*
// 즉시 실행 함수
// 매개변수 X
(function () {
  return document.write(10 + 20);
})();
// 매개변수 O
(function (a, b) {
  return document.write(a + b);
})(10, 20);
*/

// 화살표 함수
function add(a, b) {
  return document.write(a + b);
}

let add2 = () => document.write(a + b);

add(10, 20);
add2(10, 20);
