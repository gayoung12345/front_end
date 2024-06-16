let now = new Date();
// document.write("현재 시각은 " + now);
// document.write("현재 시각은 " + now.toLocaleString());
/*
function time() {
  document.write("현재 시각은 " + now.toLocaleString());
  location.reload();
}
setInterval(time, 60000); // 1분마다 반복 실행
*/
/*
document.write("현재 년도는 " + now.getFullYear(), "<br>");
document.write("현재 월은 " + (now.getMonth() + 1), "<br>"); // 0부터 시작하므로, 1을 더해줘야함
document.write("현재 날짜는 " + now.getDate(), "<br>");
document.write("현재 요일은 " + now.getDay(), "<br>"); // 숫자로 출력 일~월 0~6
document.write("현재 시는 " + now.getHours(), "<br>");
document.write("현재 분은 " + now.getMinutes(), "<br>");
document.write("현재 초는 " + now.getSeconds(), "<br>");
*/
// 요일을 처리하여 월화수목금토일로 출력
/*
// switch-case
let dayOfWeek;
switch (now.getDay()) {
  case 0:
    dayOfWeek = "일";
    break;
  case 1:
    dayOfWeek = "월";
    break;
  case 2:
    dayOfWeek = "화";
    break;
  case 3:
    dayOfWeek = "수";
    break;
  case 4:
    dayOfWeek = "목";
    break;
  case 5:
    dayOfWeek = "금";
    break;
  case 6:
    dayOfWeek = "토";
    break;
  default:
    dayOfWeek = "I don't Know!";
}
document.write("현재 요일은 " + dayOfWeek, "<br>");
*/
/*
// Array
const days = ["일", "월", "화", "수", "목", "금", "토"];
document.write("현재 요일은 " + days[now.getDay()], "<br>");
console.log(days.length); // 7
*/

// ArrayObject
let nums = [1, 2, 3];
let chars = ["a", "b", "c", "d"];

let numsChars = nums.concat(chars);
console.log(numsChars); // 7 [1, 2, 3, 'a', 'b', 'c', 'd']
let charsNums = chars.concat(nums);
console.log(charsNums); // 7 ['a', 'b', 'c', 'd', 1, 2, 3]

console.log(nums.join()); // 1,2,3 (문자 지정이 없으면 기본값 ",")
console.log(chars.join("/")); // a/b/c/d (문자 지정 "/")

let result1 = nums.push(4, 5);
console.log(nums); // 5 [1, 2, 3, 4, 5]

nums.unshift(-1, 0);
console.log(nums); // 7 [-1, 0, 1, 2, 3, 4, 5]

nums.pop();
console.log(nums); // 6 [-1, 0, 1, 2, 3, 4] 가장 마지막에 있는 요소 삭제

nums.shift();
console.log(nums); // 5 [0, 1, 2, 3, 4] 가장 앞에 있는 요소 삭제

nums.splice(3);
console.log(nums); // 3 [0, 1, 2]

nums.splice(3, 1, 6);
console.log(nums); // 4 [0, 1, 2, 6]

let result2 = nums.slice(3, 4);
console.log(result2); // [6]
console.log(nums); // 4 [0, 1, 2, 6]
