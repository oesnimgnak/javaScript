let xhr = new XMLHttpRequest();
xhr.open("GET", "student.json");    // 요청
xhr.send();

// 응답을 받았을 경우
xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) { // 자료가 있고 가져오는데 성공했다면
        let student = JSON.parse(xhr.responseText); // student에 parse
        document.getElementById("result").innerHTML = `
            <h1>${student.name}</h1> 
            <ul>
                <li> 전공 : ${student.major} </li>
                <li> 학년 : ${student.grade} </li>
            </ul>
        `;
    }
};
ㅈ