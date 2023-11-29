// 브라우저를 열면 팝업창 열기
window.open("notice.html","이벤트팝업","width=600 height=500");

// 버튼을 누르면 팝업창 열기
// 버튼 요소 가져오기
const btn = document.querySelector("button");

// 이벤트 처리
btn.addEventListener("click", () => {
    window.open("notice.html","이벤트팝업","width=600 height=500 left=300 top=200");
});
