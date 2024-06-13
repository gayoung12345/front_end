function changeBg(color) {
  const box = document.querySelector("#result");
  box.style.backgroundColor = color;
}

function openDesc() {
  document.querySelector("#open").style.display = "none"; // 설명보기 버튼 가리기
  document.querySelector("#desc").style.display = "block"; // 가려진 설명 나타나기
}

function closeDesc() {
  document.querySelector("#open").style.display = "block";
  document.querySelector("#desc").style.display = "none";
}
