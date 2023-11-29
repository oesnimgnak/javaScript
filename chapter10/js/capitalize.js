// 사용자로부터 영문 소문자로 된 문자열을 입력받음
const string = prompt("영문 소문자로 된 문자열을 입력하세요.");

// string 메서드 사용 방식:
// const firstCh = string[0].toUpperCase();  // 첫 글자를 대문자로 만들어 저장
// const remainStr = string.slice(1);  // 두번째 글자부터 끝까지 추출해서 저장
// const result = firstCh + remainStr;  // 첫 글자와 추출한 문자열을 연결
// document.write(result);

// 전개 연산자 사용 방식:
// 문자열을 배열로 변환하여 첫 글자를 대문자로 만들고, 나머지 문자열과 함께 배열을 다시 문자열로 변환한다.
const result = [string[0].toUpperCase(), ...string.slice(1)].join("");
document.write(result);
