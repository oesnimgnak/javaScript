var hi = "hello";       //전역 변수

function greeting() {
    hi = "bye"; //데이터 재정의 . 함수안에서 전역 변수 수정 가능
}
console.log(hi);    //hello
greeting();     //재정의 함수 불러오기
console.log(hi);    //bye