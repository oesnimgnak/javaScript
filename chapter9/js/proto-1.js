// 함수 밖에서 프로토타입을 사용해 생성자 함수의 메서드 정의
// 프로퍼티는 함수 안에, 메서드는 프로토 탐입을 사용해서 정의
function newBook(title, pages, done) {
    this.title = title;
    this.pages = pages;
    this.done = done;
  }  
// 메서드 생성
newBook.prototype.finish = function () {
    let str = "";
    this.done == false ? (str = "읽는중") : (str = "완독");
    return str;
  };
  

// 생성자 함수를 사용하여 객체 생성
// 3개의 인수를 가지고 객체 생성
const book1 = new newBook("모던 자바스크립트", 550, false);
const book2 = new newBook("JAVA", 650, true);

document.write("<h2>프로토타입 메서드 사용</h2>");
document.write(`${book1.title} = ${book1.pages}쪽 - ${book1.finish()}<br>`);
document.write(`${book2.title} = ${book2.pages}쪽 - ${book2.finish()}<br>`);

// 위 코드처럼 쓰면 추가하기 쉽다.