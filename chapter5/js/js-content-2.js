// 제목 영역의 요소 가져오기 => 아이디가 title인 요소를 가져온다.
const title = document.querySelector("#title");
// 이름 영역의 요소를 가져온다.
const userName = document.querySelector("#desc p");
// 프로필 이미지 영역의 요소를 가져온다.
const pfImage = document.querySelector("#profile img");

// title영역을 클릭하면 제목 영역의 내용을 한글로 바꾼다.
title.onclick = () => title.innerHTML = "프로필";
// userName 영역을 클릭하면 진한 글자 <b>로 내이름을 바꾼다.
userName.onclick = () => userName.innerHTML = `이름 : <b>강민서</b>`;
// pfimg 영역을 클릭하면 이미지를 바꾼다 => 이미지 경로를 포함하여 파일 이름을 바꾼다.
pfImage.onclick = () => pfImage.src = "images/pf2.png";