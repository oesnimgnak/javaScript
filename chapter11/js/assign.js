//구조 분해 할당하기
//주어진 자료 구조를 분해해서 변수에 할당하는 기능

let [apple1,peach] =["사과","복숭아"];

console.log(apple1);
console.log(peach);

let [teacher, ... students ] = ["이순신","홍길동","김길동","박길동"];
console.log(teacher);
console.log(students);


let x = 10;
let y = 20;
console.log("x :",x,"y :",y);


[x,y] = [y,x];

const member2 = {
    name : "홍길동",
    age : 25
};

let {name : userName, age} = member2;
console.log(userName);


const student4 ={
    name : '김지연',
    score : {
        kor:98,
        eng : 56,
        math : 99,
    },
    friends : ["홍길동","김길동","최길동"],
};

let {
    name,
    score : {kor,eng,math},
    friends : [f1,f2,f3],

}=student4;

console.log(math);
console.log(f1);