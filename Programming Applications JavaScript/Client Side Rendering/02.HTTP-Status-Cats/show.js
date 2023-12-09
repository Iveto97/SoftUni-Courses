

export function onShow(event) {
    event.preventDefault();
    const btnTarget = event.target.parentElement;
    const details = btnTarget.querySelector('div.status').style.display;

    if(details === 'block') {
        event.target.textContent = 'Show status code';
        btnTarget.querySelector('div.status').style.display = 'none';
    } else {
        event.target.textContent = 'Hide status code';
        btnTarget.querySelector('div.status').style.display = 'block';
    }
    
}