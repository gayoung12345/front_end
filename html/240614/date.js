let now = new Date();
let firstDay = new Date("2024-03-28");

let toNow = now.getTime();
let toFirst = firstDay.getTime();
let passedTime = toNow - toFirst;

passedTime = Math.floor(passedTime / (1000 * 60 * 60 * 24)); // 밀리초를 일수로 계산
// 계산하고 남은 소수점은 버림: Math.floor()
// 계산하고 남은 소수점은 반올림: Math.round()

document.querySelector("#result").innerText = passedTime;
console.log(passedTime);

document.querySelector("#currentDay").innerText = now.toLocaleString();
document.querySelector("#startDay").innerText = firstDay.toLocaleString();

function setStartDay() {
  let startDateInput = document.getElementById("startDate");
  let startDay = new Date(startDateInput.value);
  firstDay = startDay;
  document.querySelector("#startDay").innerText = firstDay.toLocaleString();
  toFirst = firstDay.getTime();
  passedTime = toNow - toFirst;

  passedTime = Math.floor(passedTime / (1000 * 60 * 60 * 24));
  document.querySelector("#result").innerText = passedTime;
  console.log(passedTime);
}
