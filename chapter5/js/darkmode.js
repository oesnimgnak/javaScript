

// 버튼 요소 가져오기
const btn = document.querySelector("#toggle-box button");

// btn.onclick = () => {
//     document.body.classList.toggle("dark"); 
  
// };

// title 영역을 클릭하면 배경색과 글자색을 바꾼다.
btn.onclick = () => {
    if (!document.body.classList.contains("dark")) {
        document.body.classList.add("dark");
    } else {
        document.body.classList.remove("dark");
    }
};
