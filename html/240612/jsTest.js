var heading = document.querySelector("#heading");
heading.onclick = function () {
  heading.style.color = "red";
  // alert("안녕하세요") // 알림 팝업
  // var reply = confirm("정말 삭제하시겠습니까?") // 확인 팝업. 확인을 누르면 True 반환, 취소를 누르면 False 반환
  var reply = prompt("이름을 입력하세요."); // 입력 팝업

  console.log(reply); // 검사 - console에서 log확인

  document.write(
    "<h1>저의 이름은 " + reply + " 입니다. 만나서 반갑습니다.</h1>"
  ); // 출력
};
var text = document.querySelector("#text");
text.onclick = function () {
  text.style.color = "blue";
};

const number1 = 1; // 상수선언
let num2 = 2; // 변수선언

num2 = 4; // 변수 값 초기화
