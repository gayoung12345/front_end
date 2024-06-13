//const memNum = prompt("몇명이 참가하나요?");
//const colNum = prompt("좌석은 한 줄에 몇개를 놓을까요?");
//const rowNum = memNum / colNum;

/*
// div로 만들기
document.write("<div class='table'> <h2>좌석배정표</h2> <ul>");
for (let r = 0; r < rowNum; r++) {
  for (let c = 1; c <= colNum; c++) {
    let seatNum = r * colNum + c;
    if (seatNum > memNum) break;
    document.write("<li>좌석" + seatNum + " </li>");
  }
  // document.write("<br>");
}
document.write("</ul></div>");
*/
/*
// table로 만들기(책에 있는 내용)
document.write("<table><h2>좌석배정표</h2>");
for (let r = 0; r < rowNum; r++) {
  document.write("<tr>");
  for (let c = 1; c <= colNum; c++) {
    let seatNum = r * colNum + c;
    if (seatNum > memNum) break;
    document.write("<td>좌석" + seatNum + " </td>");
  }
  document.write("</tr>");
}
document.write("</table>");
*/
/*
// 좌석 번호 대신 이름이 나오도록
const users = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
document.write("<table><h2>좌석배정표</h2>");
for (let r = 0; r < rowNum; r++) {
  document.write("<tr>");
  for (let c = 1; c <= colNum; c++) {
    let seatNum = c + r * colNum - 1;
    if (seatNum > memNum) break;
    document.write("<td>" + users[seatNum] + " </td>");
  }
  document.write("</tr>");
}
document.write("</table>");
*/

const colNum = 6;
const rowNum = 3;

// 좌석 번호 대신 이름이 나오도록
const users = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
document.write("<table><h2>좌석배정표</h2>");
for (let r = 0; r < rowNum; r++) {
  document.write("<tr>");
  for (let c = 1; c <= colNum; c++) {
    let seatNum = Math.floor(Math.random() * 17);
    document.write("<td>" + users[seatNum] + " </td>");
  }
  document.write("</tr>");
}
document.write("</table>");
