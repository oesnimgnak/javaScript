function showData(name, age) {
    alert(`안녕하세요? ${name}님. 나이가 ${age}살이군요.`);
}

function getDate(callback) {
    let userName = prompt("이름을 입력하세요. : ");
    let userAge = prompt("나이를 입력하세요.");
    callback(userName, userAge);
}

getDate(showData)