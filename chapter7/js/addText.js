// 버튼, 주문 결과 영역, 책 제목 요소 가져오기
const btn = document.querySelector("#order");
const info = document.querySelector("#orderInfo");
const title = document.querySelector("#container > h2");

// 주문하기 버튼을 클릭하면..
btn.addEventListener("click", () => {
    // p요소 만들기
    let newP = document.createElement("p");
    // 제목에서 내용만 가지고와서 텍스트 노드 만들기
    let textNode = document.createTextNode(title.innerText);
    // 내용을 p 요소에 추가(자식으로 연결)
    newP.appendChild(textNode);
    newP.style.fontSize = "1.5em";
    newP.style.color = "red";
    // p 요소를 orderInfo 영역에 추가(자식으로 연결)
    info.appendChild(newP);

},
    {once : true}  // click 이벤트가 여러번 발생해도 이벤트 리스너는 한번만 실행된다.
);