
const num = parseFloat(prompt("1보다 큰 숫자를 입력하세요 "))

// 2.계산하기
let sum = 0;
if(num % 2 == 0) {
    for (let i = 1; i <= num; i++) {
        sum = sum + i;
        document.write(`${num} ------- ${sum} <br>`)
    }
}
// 3. 출력하기
//document.write(`${num} ------- ${sum} <br>`)

if( n !== null && n > 1) {
    for(let i = 1; i <= n ; i++) {
      if(i % 2 == 1) {
            continue;
      }
      sum += i;
      document.write(`${i} ----- ${sum} <br>`);
    }
  }