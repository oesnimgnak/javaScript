// id가 title인 요소 가져오기
const title = document.querySelector("#title");

// title 영역을 클릭하면 배경색과 글자색을 바꾼다.
title.onclick = () => {
    //clicked 스타일이 없으면 class 이름이 clicked인 것으로 추가하시오.
    if(!title.classList.contains("clicked")){
        title.classList.add("clicked"); // 스타일 추가.
    } else {   // clicked 스탕일이 있으면.
        title.classList.remove("clicked"); // 스타일 제거.
    }
};