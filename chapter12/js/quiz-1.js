// JSON 데이터를 가져오기 위한 XMLHttpRequest 객체 생성
const url = "a.json"; // 가져올 JSON 파일의 경로
const result = document.querySelector("#result"); // 결과를 표시할 요소 선택

let xhr = new XMLHttpRequest(); // XMLHttpRequest 객체 생성
xhr.open('GET', url, true); // GET 방식으로 지정한 경로에서 데이터를 비동기적으로 가져옴
xhr.send(); // 요청 전송

xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) { // 요청이 완료되고 응답 상태가 200 (OK) 일 때
    let product = JSON.parse(xhr.responseText); // JSON 데이터 파싱
    console.log(product);

    // 결과를 HTML로 표시
    result.innerHTML = `
      <p>상품명 : ${product.data.name}</p>
      <p>생산년도 : ${product.data.year}</p>
    `;
  }
}
