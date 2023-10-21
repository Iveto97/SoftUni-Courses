function attachEventsListeners() {

    const buttonsRef = Array.from(document.querySelectorAll('input[type=button]'));
    const inputs = Array.from(document.querySelectorAll('input[type=text]'));

    for (const btn of buttonsRef) {
        btn.addEventListener('click', convertTime);
    }

    function convertTime(event) {
        const value = Number(event.target.parentElement.children[1].value);
        const inputNumber = event.target.parentElement.children[1].id;
        switch (inputNumber) {
            case 'days': convert(value) ;break;
            case 'hours': convert(value / 24) ;break;
            case 'minutes': convert(value / 60 / 24) ;break;
            case 'seconds': convert(value / 60 / 60 / 24) ;break;
            default: ;break;
        }
    }

    function convert(value) {
        inputs[0].value = value;
        let currentValue = value * 24;

        for (let index = 1; index < inputs.length; index++) {
            let input = inputs[index];
            input.value = currentValue;
            currentValue *= 60;
            
        }
    }
}