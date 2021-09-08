const saveButton = document.querySelector("#save");
const loadButton = document.querySelector("#load");
const currentValue = document.querySelector("#currentValue");
const input: HTMLInputElement = document.querySelector("#input");

saveButton.addEventListener("click", () => {
    console.log("save", input.value);
    currentValue.innerHTML = input.value;
    input.value = "";
});

loadButton.addEventListener("click", () => {
    console.log("load");
    currentValue.innerHTML = "loaded";
});
