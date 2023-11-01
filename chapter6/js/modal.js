// 버튼 요소 가져오기
const open = document.querySelector("#open");
const modalBox = document.querySelector("#modal-box");
const close = document.querySelector("#close");

open.addEventListener("click", () => {
    modalBox.classList.toggle("active"); // 클릭하면 .active 스타일을 토글합니다.
});

close.addEventListener("click", () => {
    modalBox.classList.remove("active"); // 클릭하면 클래스리스트에서 .active 스타일 제거
  });