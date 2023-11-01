// 캐러셀 영역 가져오기
const container = document.querySelector("#container");

// 이미자 배열로 만들기
const pics = ["pic-1.jpg", "pic-2.jpg", "pic-3.jpg", "pic-4.jpg", "pic-5.jpg"]

// 첫 번째 이미지를 기본으로 표시
container.style.backgroundImage = `url(images/${pics[0]})`;

// 화살표 요소 가져오기
const arrows = document.querySelectorAll(".arrow");

// 배열 인덱스 변수
let i = 0;

// 화살표 버튼을 누르면..
arrows.forEach( arrow => {
    arrow.addEventListener("click", (e) => {
        if(e.target.id == "left") { // 왼쪽 화살표를 누르면
            i--;                    // 이전 이미지로 이동
            if (i < 0) {            // 첫 번째 이미지인 경우
                i = pics.lengt -1;  // 마지막 이미지로 이동
            }
        } else if (e.target.id == "right") {    // 오른쪽 화살표를 누르면
            i++;                                // 다음 이미지로 이동
            if (i >= pics.length) {             // 마지막인 경우
                i = 0;                          // 첫 번째 이미지로 이동
            }
        }
        container.style.backgroundImage = `url(images/${pics[i]})`  // 현재 이미지 표시
    });
});