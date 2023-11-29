const member1 = ["HTML","CSS"]
const member2 = ["CSS","자바스크립트","리액트"]
const member3 = ["자바스크립트", "타입스크립트"]

// 3명의 과목 배열로 만들기
const subject = [...member1,...member2,...member3]

//Set() 객체에 만들어 반복문으로 과목 추가하기
const resultList = new Set();
subject.forEach((subject) => {
    resultList.add(subject);
});

// 결과 영역에 출력
const result = document.querySelector("#result");

result.innerHTML = `
<ul>    <!-- 배열 요소에 똑같은 동작을 할때는 map() 메서드 사용. p399 -->
${[...resultList].map(subject => `<li>${subject}</li>`).join("")}
</ul>
`;
