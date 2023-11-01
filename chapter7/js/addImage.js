// 이미지 보여질 영역 가져오기
const container = document.querySelector("#container");

// 시간 정보 가져오기
const today = new Date();   // 현재 날짜와 시간 정보를 담은 today 객체

// 현재 시간 중 시 정보를 가져옵니다.
const hrs = today.getHours(); 

// 이미지 요소 만들기
let newImg = document.createElement("img");

// 이미지 경로 설정
newImg.src = (hrs < 12) ? "images/morning.jpg" : "images/afternoon.jpg";

// container에 이미지 연결(자식으로 추가)
container.appendChild(newImg);