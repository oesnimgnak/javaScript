// li 리스트 항목을 모두 가져온다
const items = document.querySelectorAll("li");

for(let item of items) {
    item.addEventListener("click", function() {
        // 해당 항목을 클릭했을 때 그 항목이 삭제됨.
        this.parentNode.removeChild(this); // 부모 노드에서 나를 삭제

        // 자신을 삭제
        // this.remove();
    });
}