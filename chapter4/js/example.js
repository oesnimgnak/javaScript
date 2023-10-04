// 두 수를 입력 받아 곱한 결과를 리턴하여 화면에 출력하는 함수.
// 함수선언
// function multiply(num1, num2) {
//     let sum=0;
//     sum = num1 * num2;
//     return sum;
// }
// let result = multiply(num1, num2);

function multiply2(num1, num2) {
    return num1 * num2;
}

//2개 정수 입력 받기
let num1 = parseInt(prompt("첫 번째 정수 입력 : "))
let num2 = parseInt(prompt("두 번째 정수 입력 : "))

//document.write(`<h1>${num1}과 ${num2}를 곱한 결과는 ${result}입니다.</h1>`);  // function multiply(num1, num2) 출력물
document.write(`<h1>${num1}과 ${num2}를 곱한 결과는 ${multiply2(num1, num2)}입니다.</h1>`);