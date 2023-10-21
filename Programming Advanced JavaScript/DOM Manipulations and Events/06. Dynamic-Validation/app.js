function validate() {
    const input = document.getElementById('email');
    const pattern = /[a-z]+@[a-z]+.[a-z]+/gm;

    input.addEventListener('change', changeStyle);


    function changeStyle() {
        const inputValue = input.value;

        if (inputValue.match(pattern)) {
            input.classList.remove('error');
        } else {
            input.classList.add('error');
        }
    }
}