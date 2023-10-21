function solve() {
    const formRef = document.querySelector('form');
    const textRef = document.getElementById('task');
    const descRef = document.getElementById('description');
    const dateRef = document.getElementById('date');

    formRef.addEventListener('submit', onSubmit);

    const openSection = document.getElementsByTagName('section')[1].children[1];
    const inProgressSection = document.getElementsByTagName('section')[2].children[1];
    const completeSection = document.getElementsByTagName('section')[3].children[1];

    function onSubmit(event) {
        event.preventDefault();

        const textValue = textRef.value;
        const descValue = descRef.value;
        const dateValue = dateRef.value;

        if (!textValue || !descValue || !dateValue) {
            return;
        }

        const article = document.createElement('article');
        const header = document.createElement('h3');
        header.textContent = textValue;

        const paraOne = document.createElement('p');
        paraOne.textContent = `Description: ${descValue}`;

        const paraTwo = document.createElement('p');
        paraTwo.textContent = `Due Date: ${dateValue}`;

        const divFlex = document.createElement('div');
        divFlex.classList.add('flex');

        const startBtn = document.createElement('button');
        startBtn.classList.add('green');
        startBtn.textContent = 'Start';
        startBtn.addEventListener('click', inProgress);

        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('red');
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', deleteNode);

        divFlex.appendChild(startBtn);
        divFlex.appendChild(deleteBtn);
        article.appendChild(header);
        article.appendChild(paraOne);
        article.appendChild(paraTwo);
        article.appendChild(divFlex);

        openSection.appendChild(article);

        textRef.value = '';
        descRef.value = '';
        dateRef.value = '';

    }

    function inProgress(event) {
        const art = event.currentTarget.parentElement.parentElement;

        const greenBtn = event.currentTarget.parentElement.getElementsByTagName('button')[0];
        greenBtn.classList.remove('green');
        greenBtn.classList.add('red');
        greenBtn.textContent = 'Delete';

        const redBtn = event.currentTarget.parentElement.getElementsByTagName('button')[1];
        redBtn.classList.remove('red');
        redBtn.classList.add('orange');
        redBtn.textContent = 'Finish';

        redBtn.removeEventListener('click', deleteNode);
        redBtn.addEventListener('click', complete);

        inProgressSection.appendChild(art);


        greenBtn.removeEventListener('click', inProgress);
        greenBtn.addEventListener('click', deleteNode);
    }

    function complete(event) {
        const parentDiv = event.currentTarget.parentElement;
        const lastArt = event.currentTarget.parentElement.parentElement;
        completeSection.appendChild(lastArt);
        lastArt.removeChild(parentDiv);

    }

    function deleteNode(event) {
        const articleNode = event.currentTarget.parentElement.parentElement;
        const parent = event.currentTarget.parentElement.parentElement.parentElement;
        parent.removeChild(articleNode);

    }
}