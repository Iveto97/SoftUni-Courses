function attachEvents() {
    const URI = 'http://localhost:3030/jsonstore/messenger';
    const refreshBtn = document.getElementById('refresh');
    const textAreaRef = document.getElementById('messages');
    const submitBtnRef = document.getElementById('submit');

    refreshBtn.addEventListener('click', onLoadMessage);

    async function onLoadMessage(e) {
        textAreaRef.textContent = '';
        const response = await fetch((URI));
        const data = await response.json();
        Object.values(data).forEach(row => {
            textAreaRef.textContent += `${row.author}: ${row.content}\n`;
        })
        textAreaRef.textContent = textAreaRef.textContent.trim();
    }

    submitBtnRef.addEventListener('click', onSubmit);

    async function onSubmit(e) {
        const dataRef = document.querySelectorAll('#controls input[type="text"]');
        const author = dataRef[0].value;
        const content = dataRef[1].value;
        const data = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                author,
                content
            })
            
        }
        const res = await fetch(URI, data);
        dataRef[0].value = '';
        dataRef[1].value = '';
    } 
}

attachEvents();
