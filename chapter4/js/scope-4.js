var hi = "hello";       //전역 변수

function greeting() {
   var hi = "bye"; //지역 변수
}
console.log(hi);    //hello
greeting();     //재정의 함수 불러오기
console.log(hi);    //hello