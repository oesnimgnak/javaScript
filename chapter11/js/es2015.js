// 매개변수 값
// 매개변수에 기본 값을 지정하지 않았을 때
function hello1(name, message) {
    console.log(`${name}님 ${message}`);
}
hello1("홍길동", "반갑습니다");
hello1("김길동"); // 기본 메시지를 사용

function hello2(name, message = "안녕하세요") {
    console.log(`${name}님 ${message}`);
}
hello2("홍길동", "반갑습니다");
hello2("김길동"); // 기본 메시지를 사용

// 전개 구문 ...
function addNum(...numbers) {
    let sum = 0;
    for (let number of numbers) {
        sum += number;
    }
    return sum;
}
console.log(addNum(1, 2));
console.log(addNum(1, 2, 3, 4, 5));

let animals = ['bird', 'dog', 'cat'];
let fruits = ['apple', 'banana', 'tomato'];
console.log(animals.concat(fruits)); // concat 메서드 사용
console.log([...animals, ...fruits]); // 전개 구문 사용

let fruits2 = ['apple', 'banna', 'tomato'];
console.log(fruits2);
let fav = fruits2;
console.log(fav);
fav[0] = 'mango';
console.log(fruits2); // fav와 fruits2는 같은 배열을 참조
console.log(fav);

// 전개 구문으로 값만 복사
let fav2 = [...fruits2]; // fav2에 fruits2의 복사본을 할당
fav2[1] = 'orange';
console.log(fruits2); // 원본 배열은 변경되지 않음
console.log(fav2);

// 객체 프로퍼티
// 일반적으로 객체의 프로퍼티에 접근 할 때 점 표기법 사용
// [] 사용 할 수 있다
// [] 안에 입력하는 프로퍼티는 문자열로 작성

const book = {
    title: "javascript",
    pages: 650
};

book["published date"] = "2013-11";
console.log(book);

function fn() {
    return "result";
}
const obj1 = {
    [fn()]: "함수 키"
};
console.log(obj1);

function add(a, b) {
    a + b; // 이 부분에서 더한 값은 활용되지 않음
    return a + b;
}
// 객체를 표기할 때 객체 밖에서 점 표기법으로
let student = {
    name: '홍길동'
};
student.age = 20;
console.log(student);

// 변수에 저장된 값을 가져와 프로퍼티로 사용해야 하는 경우
// 생성자 함수로 객체를 정의해서 사용할 수 있다
function makeUser(name, age) {
    return {
        name: name,
        age: age
    };
}

function makeUser(name, age) {
    return {
        name,
        age
    };
}
let user2 = makeUser("홍길동", 20);
console.log(user2);

/*
프로퍼티 단축 표기법 name: name
=> 직접 할당
=> 주로 간단한 객체 초기화에 사용

this.name = name=> 생성자 함수 내부에서 사용
=> 객체의 메서드나 속성을 초기화 하는데 사용
*/

// 심벌(Symbol) 키
let user_id1 = Symbol();
let user_id2 = Symbol();
console.log(user_id1 === user_id2); // 서로 다른 값을 가짐

const id = Symbol("id");
const tel = Symbol("tel_num");

const member = {
    name: '홍길동',
    age: 25,
    [id]: 202035000, // 심벌 키 사용
    [tel]: function() {
        alert(prompt("전번 입력"));
    },
};

for (let item in member) {
    console.log(`${item}: ${member[item]}`);
}

// 심벌 키에 접근하기
console.log(member[id]);
// member[tel](); // 메서드가 실행된다

let tel_num = Symbol.for("tel_num");

let phone = Symbol.for("tel_num");

console.log(tel_num === phone); // 서로 다른 값이라도 전역 심벌 레지스트리에서는 동일하게 참조됨

// Symbol.keyFor();
// 심벌값을 인수로 받아서 전역 심벌 레지스트리를 뒤져 심벌값의 키를 찾는다
console.log(Symbol.keyFor(tel_num)); // 전역 심벌의 키 출력
