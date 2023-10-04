
// 두 수를 전달 받아 곱하는 화살표 함수 정의
let sum = (num1, num2) => num1 * num2;

//2개 정수 입력 받기
let num1 = parseInt(prompt("첫 번째 정수 입력 : "))
let num2 = parseInt(prompt("두 번째 정수 입력 : "))

// 결과를 화면에 출력하기 - <h3>
document.write(`<h3>${num1}과 ${num2}를 곱한 결과는 ${sum(num1, num2)}</h3>`);