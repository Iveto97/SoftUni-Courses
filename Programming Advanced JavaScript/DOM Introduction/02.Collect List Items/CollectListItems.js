function extractText() {
    let elements = document.querySelectorAll("ul#items li");
    let textArea = document.querySelector("#result");

    for (const element of elements) {
        textArea.value += element.textContent + "\n";
    }
}
    