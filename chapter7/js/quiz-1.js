// const username = document.querySelector("#username");
// const major = document.querySelector("#major");
// const bttn = document.querySelector("form > button");

// bttn.addEventListener("click", (e) => {
//   e.preventDefault();
//   let tbody = document.querySelector("#attendant > tbody");
//   let newTr = document.createElement("tr");  

//   // 첫번째 셀에 입력한 이름 넣기
//   let nameTd = document.createElement("td");
//   nameTd.innerText = username.value;
//   username.value = "";
  
//   // 두번째 셀에 입력한 전공 넣기
//   let majorTd = document.createElement("td");  
//   majorTd.innerText = major.value;  
//   major.value = "";

//   // 두 셀을 새 줄에 추가하기
//   newTr.appendChild(nameTd);
//   newTr.appendChild(majorTd);

//   // 새 줄을 tbody에 추가하기
//   tbody.appendChild(newTr);
// });


// //

// #username 요소와 #major 요소의 값을 가져옵니다.
const username = document.querySelector("#username");
const major = document.querySelector("#major");
const bttn = document.querySelector("form > button");

// 이벤트 리스너를 추가합니다.
bttn.addEventListener("click", (e) => {
  // 기본 동작을 중지합니다.
  e.preventDefault();

  // tbody 요소를 가져옵니다.
  const tbody = document.querySelector("#attendant > tbody");

  // `<tr>` 태그를 생성합니다.
  const newTr = document.createElement("tr");

  // `<td>` 태그를 생성하고 입력한 값을 추가합니다.
  newTr.innerHTML = `<td>${username.value}</td><td>${major.value}</td>`;

  // 입력한 값을 초기화합니다.
  username.value = "";
  major.value = "";

  // `<tr>` 태그를 tbody에 추가합니다.
  tbody.appendChild(newTr);
});
