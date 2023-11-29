let likePizza = false;
// Promise 객체 만들기 - 제작 코드
const pizza = new Promise ((resolve, reject) => {
    if(likePizza) {
        resolve('피자를 주문합니다.');
    }
    else {
        reject('피자를 주문하지 않습니다.');
    }
})

// Promise 객체 소비하기 - 소비 코드

pizza
    .then(result => console.log(result))
    .catch(error => console.log(error))
    .finally(() => console.log("완료"));