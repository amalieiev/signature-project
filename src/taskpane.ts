import { SIGNATURE_STORAGE_KEY } from "./constants";
import { setSignatureAsync } from "./office";

const saveButton = document.querySelector("#save");
const input: HTMLInputElement = document.querySelector("#signature");

Office.onReady(() => {
    const value = Office.context.roamingSettings.get(SIGNATURE_STORAGE_KEY);
    input.value = value;
});

saveButton.addEventListener("click", () => {
    const value = input.value;

    setSignatureAsync(value);

    Office.context.roamingSettings.set(SIGNATURE_STORAGE_KEY, value);
    Office.context.roamingSettings.saveAsync((result) => {
        console.log("saveAsync", result);
    });
});
