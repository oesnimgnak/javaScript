// HTML 문서에서 요소를 가져옵니다.
const origin = document.querySelector("#origin");
const result = document.querySelector("#result");

// 초기 숫자 배열을 생성하고, 'origin' 영역에 표시
let numbers = [2, 4, 6, 8, 10];
showArray(origin, numbers);

// 숫자 배열의 합을 구하고, 배열에 추가한 뒤 'result' 영역에 표시
let sum = 0;    // sum 선언 후 0으로 초기화 
for(let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
numbers.push(sum);  // 배열에 추가
showArray(result, numbers);

// 배열을 표시하는 함수 정의
function showArray(area, arr) {
  let str;
  // HTML 테이블 형식으로 배열을 문자열로 변
  str = "<table><tr>";
  for (let i = 0; i < arr.length; i++) {
    str +=  "<td>" + arr[i] + "</td>";
  }
  str += "</tr></table>";
  // 지정된 영역에 HTML 문자열을 삽입하여 배열을 표시
  area.innerHTML = str;
}
