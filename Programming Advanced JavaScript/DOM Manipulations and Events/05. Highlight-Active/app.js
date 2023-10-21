function focused() {
    const parentInput = document.getElementsByTagName('div')[0];
    const inputField = Array.from(parentInput.getElementsByTagName('input'));

    for (const input of inputField) {
        input.addEventListener('focus', focused);
        input.addEventListener('blur', blur);
    }

    function focused(event) {
        const parent = event.target.parentNode;
        parent.classList.add('focused');

    }

    function blur(event) {
        const parent = event.target.parentNode;
        parent.classList.remove('focused');
    }
}