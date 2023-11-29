// 페이지가 로드되면 배경 이미지를 랜덤으로 바꾼다.
window.onload = function() {
    const bgCount = 5;  // 이미지 개수
    let randomNumber = Math.floor(Math.random() * bgCount) + 1; // 1과 bgCount 사이의 수
    document.body.style.backgroundImage = `url(images/bg-${randomNumber}.jpg)`;
}
