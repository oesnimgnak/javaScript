let xhr = new XMLHttpRequest();
xhr.open("GET", "student-2.json");  // 요청
xhr.send();

// 응답을 받았을 경우
xhr.onreadystatechange = function () {
  if (xhr.readyState == 4 && xhr.status === 200) { // 자료가 있고 가져오는데 성공했다면
    let student = JSON.parse(xhr.responseText); // student에 parse
    renderHTML(student);
  }
};

// 함수 생성
function renderHTML(contents) {
    // 있는 레이더를 차곡차곡 쌓아서 넣을 변수 생성
    let result = "";
    for (let content of contents) { // 레이어에 넣어줘라 constents에 내용이 다 담길떄 까지
        result += `<h1>${content.name}</h1>
        <ul>
        <li>전공: ${content.major}</li>
        <li>학년: ${content.grade}</li>
        </ul><hr>`;
    }
  document.querySelector("#result").innerHTML = result;
}