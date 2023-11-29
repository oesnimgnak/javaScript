class BookC  {
    // 프로퍼티 생성
    constructor(title, price) {
      this.title = title;
      this.price = price; 
    }
    // 메서드 생성
    buy() {
      console.log(`${this.title}을(를) ${this.price}원에 구매하였습니다.`);  
    }
}

// 새로운 클래스 생성 - 상속받기
class TextbookC extends BookC {
    constructor(title, price, major) {
      super(title, price);   // 기존 클래스의 프로퍼티 재사용
      this.major = major;     // 새로운 프로퍼티 정의
    }
  
    buyTextbook () {   // 새로운 메서드 정의
      console.log(`${this.major} 전공 서적, ${this.title}을 구매했습니다.`);
    }
}

const book1 = new BookC("자료 구조", 15000);
book1.buy();

const book2 = new TextbookC("인공지능", 5000, "컴퓨터공학");
book2.buyTextbook();
book2.buy();