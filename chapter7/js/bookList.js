//버튼, 제목, 저자, 정보출력 영역 요소 가져오기

const saveBtn = document.querySelector("#save");
const author = document.querySelector("#author");
const title = document.querySelector("#title");
const bookList = document.querySelector("#bookList");

//save 버튼에 이벤트리스너 추가
saveBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (author.value != "" && title.value != "") {
    //폼에서 확인버튼이 눌려도 서버로 전송하지 않음
    //li 요소 생성
    const context = document.createElement("li");
    context.innerHTML = `${title.value}-${author.value}  <span class = "delbutton">삭제</span>`;
    bookList.appendChild(context);

    //input의 내용이 중복 등록 되지 않도록 지운다.
    title.value = "";
    author.value = "";

    //목록에서 제거하기 위한 버튼
    //삭제버튼 요소
    const delBtns = document.querySelectorAll(".delbutton");
    //삭제 버튼을 클릭 할 때 마다 해당 요소의 부모를 삭제
    for (btn of delBtns) {
      btn.addEventListener("click", function () {
        this.parentNode.remove();
      });
    }
  }
});