async function lockedProfile() {
    
    const baseURL = 'http://localhost:3030/jsonstore/advanced/profiles';

    const response = await fetch((baseURL), {method: 'GET'});
    const data = await response.json();

    const mainRef = document.getElementById('main');
    mainRef.innerHTML = '';

    Object.values(data).forEach((element, id) => {
        const div = create(element, id + 1);
        mainRef.appendChild(div);
        id++;
    });

    const moreBtn = Array.from(document.getElementsByTagName('button'));

    moreBtn.forEach(button => {
        button.addEventListener('click', (e) => {

        const btnName = e.currentTarget;
        const checkedBtn = e.currentTarget.parentElement.children[4];
        const lockBtn = e.currentTarget.parentElement.children[2];
        const div = e.currentTarget.parentElement.getElementsByTagName('div')[0];

        if(checkedBtn.checked){
            if(btnName.textContent === 'Show more') {
                div.style.display = 'block';
                btnName.textContent  = 'Hide it';

                if (lockBtn.checked) {
                    btnName.disable = true;
                }
            } else if(btnName.textContent === 'Hide it'){
                div.style.display = 'none';
                btnName.textContent  = 'Show more';
            }
        }
    })
})
}

function create(element, id) {
    const divElement = document.createElement('div');
    divElement.setAttribute('class', 'profile');

    const btn = document.createElement('button');
    btn.textContent = 'Show more';
    
    divElement.innerHTML = `
		<img src="./iconProfile2.png" class="userIcon" />
		<label>Lock</label>
		<input type="radio" name="user${id}Locked" value="lock" checked = ''>
		<label>Unlock</label>
		<input type="radio" name="user${id}Locked" value="unlock"><br>
		<hr>
		<label>Username</label>
		<input type="text" name="user${id}Username" value="${element.username}" disabled readonly />
		<div class="user${id}HiddenFields">
			<hr>
			<label>Email:</label>
			<input type="email" name="user${id}Email" value="${element.email}" disabled readonly />
			<label>Age:</label>
			<input type="email" name="user${id}Age" value="${element.age}" disabled readonly />
		</div> `;

        divElement.appendChild(btn);
        divElement.getElementsByTagName('div')[0].style.display = 'none';
        return divElement;
}