const student = {
    major : "컴퓨터공학부",
    idNum : 202095103.,
    name : '강민서'
}

for (key in student) {
    document.write(`${key} : ${student[key]} <br>`);
}