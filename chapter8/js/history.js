// 버튼 요소 가져오기
const back_btn = document.querySelector("#back");
const forward_btn = document.querySelector("#foward");

back_btn.addEventListener("click", () => {
    history.go(-1);
});

forward_btn.addEventListener ("click", () => {
    history.go(1);
});