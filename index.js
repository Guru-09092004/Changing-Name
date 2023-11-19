let text = document.getElementById("textid");
let input = document.getElementById("inputid");
let btn = document.getElementById("submitid");

btn.addEventListener("click", () => {
    text.textContent = input.value;
    input.value = ""
});
