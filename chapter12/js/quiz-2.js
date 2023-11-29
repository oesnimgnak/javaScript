const user_num = document.querySelector("#user-number");
const button = document.querySelector("button");

button.addEventListener("click", () => {
    let num = user_num.value;
    try {
        if(num === "") {
            throw "숫자를 입력하세요";
        } 
        if (num <= 10) {
            document.querySelector("#result").innerText = num;
        } 
        if (num >= 10) {
            throw "10보다 작은 숫자를 입력하세요";
        }
    } catch (err) {
        alert(err);
    } finally {
        user_num.value = "";
    }
})

