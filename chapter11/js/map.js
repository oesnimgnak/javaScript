// map() => 각 배열 요소에 똑같은 함수를 실행한 후 그 결과를 새로운 배열로 반환
let numbers = [1, 2, 3, 4, 5];
let newNumbers = numbers.map((number) => number * 2); // 각 요소를 2배로 변환
console.log(numbers); // 기존 배열 출력
console.log(newNumbers); // 새로운 배열 출력

let newNumbers2 = numbers.map((number, index) => (number * 3) + index); // 각 요소를 3배하고 인덱스를 더한 값으로 변환
console.log(newNumbers2);

// 85점 이상만 골라내기 => 새 변수에 저장
let scores = [95, 45, 77, 88, 93, 65];
let highScores = scores.filter((score) => score >= 85); // 85점 이상의 값으로 필터링
console.log(highScores);

// 85점 이상인 값과 인덱스 함께 출력
let highScores2 = scores.filter((score, index) => {
    if (score >= 85) {
        console.log(`index: ${index}, score: ${score}`);
        return score;
    }
});

let numbers2 = [1, 2, 3, 4, 5];
let result = numbers2.reduce((total, current) => total + current, 0); // 배열 요소의 합 계산
console.log(result);

let bag = new Map();
bag.set("색상", "빨강"); // Map에 키-값 쌍 추가
console.log(bag);

let myCup = new Map([
    ["색상", "흰색"],
    ["재료", "스뎅"],
    ["용량", "450ml"]
]);

console.log(myCup);

bag.set("형태", "미니");
bag.set("용도", "데일리");
console.log(bag);

bag.set("type", "백팩").set("purpose", "책가방");
console.log(bag);

console.log(bag.size); // Map의 크기 출력
console.log(bag.get("색상")); // 지정한 키의 값 출력
console.log(bag.has("색상")); // 특정 키의 존재 여부 확인
console.log(bag.has("color")); // 존재하지 않는 키의 확인
console.log(bag.delete("type")); // 특정 키 삭제
console.log(bag);
console.log(bag.delete("name")); // 존재하지 않는 키 삭제

bag.clear(); // Map 비우기
console.log(bag);

for (let key of myCup.keys()) {
    console.log(key); // Map의 키 순회
}

for (let value of myCup.values()) {
    console.log(value); // Map의 값 순회
}

for (let entry of myCup.entries()) {
    console.log(entry); // Map의 키-값 쌍 순회
}

let numSet1 = new Set();
numSet1.add("one");
numSet1.add("two");

let numSet2 = new Set().add("one").add("two");

let numSet3 = new Set([1, 2, 3, 4, 5, 1, 2, 3, 2, 4, 5]);

let student1 = new Set();
student1.add("홍길동").add("김길동");
console.log(student1);

let languages = new Set(["js", "c", "python", "js", "c"]);
for (let language of languages.values()) {
    console.log("언어:", language); // Set의 값 순회
}
