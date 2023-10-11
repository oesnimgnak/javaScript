// id가 title인 요소 가져오기
const title = document.querySelector("#title");

// title 영역을 클릭하면 배경색과 글자색을 바꾼다.
title.onclick = () => {
  // class 이름이 clicked인 것으로 추가하시오.
  title.classList.add("clicked");
};