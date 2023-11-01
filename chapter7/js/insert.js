// 버튼 요소 가져오기
const btn = document.querySelector("button");

// 버튼 누르면
btn.addEventListener("click", () => {
    // p 요소 만들기
    let newP = document.createElement("p");
    // 내용 만들기
    let textNode = document.createTextNode("안녕하세요");
    // p에 내용 추가하기
    newP.appendChild(textNode);
    // 삽입할 위치의 기준 만들기
    let basicNode = document.querySelectorAll("p")[2];
    // 기준 앞에 삽입하기
    document.body.insertBefore(newP, basicNode);
}, {once : true});