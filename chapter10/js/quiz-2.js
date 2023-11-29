// HTML 문서에서 요소를 찾아 변수에 할당
const origin = document.querySelector("#origin");
const result = document.querySelector("#result");

// 초기 배열 선언
let numbers = [2, 4, 6, 8, 10];

// 함수 tail 정의: 배열의 첫 번째 요소를 제외한 나머지 부분을 반환
function tail(arr) {
  let resultArr;
  // 배열의 길이가 1 이상이면 첫 번째 요소를 제외한 나머지 부분을 추출
  if (arr.length > 1) {
    resultArr = arr.slice(1);
  } else {
    // 배열의 길이가 1 이하면 그대로 반환
    resultArr = arr;
  }
  // 결과 배열 반환
  return resultArr;
}

// 초기 배열을 'origin' 영역에 표시
origin.innerText = numbers;

// 함수 tail을 호출하여 결과 배열을 'result' 영역에 표시
result.innerText = tail(numbers);
