// 생성자 함수 만들기 Book
function Book(title, price) {
    this.title = title;
    this.price = price;
}

// 프로토 타입으로
Book.prototype.buy = function() {
    console.log(`${this.title}을 ${this.price}원에 구매했습니다.`);
}

// 객체 만들기
const book1 = new Book("자바E", 25000);   
book1.buy();  // Book 객체의 buy() 메서드 사용

// 새로운 객체 만들기 -> 기존 객체를 확장(상속)받아 만들기
function Textbook(title, price, major) {
    // 기존 객체의 프로퍼티 상속
    Book.call(this, title, price);   // 기존 객체의 프로퍼티 재사용
    this.major = major;               // 새로운 프로퍼티 정의
  }

Textbook.prototype.buyTextbook = function() {   // 새로운 메서드 정의
    console.log(`${this.major} 전공 서적, ${this.title}을 구매했습니다.`);
  }

// 상위 객체와 하위 객체를 연결. -> 상속을 위해 사용.
Object.setPrototypeOf(Textbook.prototype, Book.prototype);

const book2 = new Textbook("알고리즘", 5000, "컴퓨터공학");
book2.buyTextbook();     // Textbook 객체의 메서드 사용
book2.buy();             // Book 객체의 메서드 사용