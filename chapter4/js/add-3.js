// 1 ~ 입력받은 수까지 합계를 계산하여 합계를 리턴하는 함수

//함수 선언
function calcSum(num) {
    let sum = 0;
    for (let i = 1; i <= num; i++) {
        sum = sum + i;  //sum을 리턴 시킬것임
    }
   return sum;
}

//정수 입력 받기
let num = parseInt(prompt("정수 입력 (몇 까지 더할까요?)"))

//함수 호출
//calcSum(10) // 인수값을 가지고 함수 호출

//함수 호출하여 결과를 바로 출력
document.write(`<h1> 1부터 ${num}까지 합은 ${calcSum(num)}입니다. </h1>`)