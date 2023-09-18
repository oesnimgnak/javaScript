function random(number) {
    //랜덤함수
    return Math.floor(Math.random()* number);
}

function bgChange() {
    //상수형 변수 const
    const rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
    document.body.style.backgroundColor = rndCol;
}

bgChange(); //함수 호출