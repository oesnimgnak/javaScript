// 버튼 요소 가져오기
const btn = document.querySelector("#view"); // "view" ID를 가진 버튼 요소를 가져옵니다.
const detail = document.querySelector("#detail"); // "detail" ID를 가진 요소를 가져옵니다.

// 버튼 클릭 이벤트 핸들러 설정
btn.onclick = () => {
    detail.classList.toggle("hidden"); // "hidden" 클래스를 토글하여 "detail" 요소를 숨기거나 표시합니다.
};
