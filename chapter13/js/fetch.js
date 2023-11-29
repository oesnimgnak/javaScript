fetch('student-2.json')
.then(response => response.json())
.then(json => {
    let output = '';
    json.forEach(student => {
        output += ` 
        <h1>${student.name}</h1> 
            <ul>
                <li> 전공 : ${student.major} </li>
                <li> 학년 : ${student.grade} </li>
            </ul>
        `;
    });
    document.querySelector("#result").innerHTML = output;
})