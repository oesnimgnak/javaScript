// 선택 목록을 가져와서 selectMenu에 저장.
const selectMenu = document.querySelector("#major");  // 선택 목록을 가져와 selectMenu로 저장
// 선택 목록에서 사용자가 선택을 하면 메세지 창으로 선책한 학과 이름 보여주기
function displaySelect() {
    let selectedText = selectMenu.options[selectMenu.selectedIndex].innerText;		
    alert(`[${selectedText}]를 선택했습니다.`);
}		

selectMenu.onchange = displaySelect;