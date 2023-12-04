const URI = 'http://localhost:3030/users/register';
const formRef = document.querySelector('form');
const logoutBtn = document.querySelector('logout');

formRef.addEventListener('submit', onSubmit);

async function onSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const email = formData.get('email');
    const password = formData.get('password');
    const rePass = formData.get('rePass');

    if(!email || !password || !rePass || password !== rePass) {
        return alert('Error');
       // throw new Error('Error');
    }

    const data = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email,
            password
        })
    }
    
    try{
        const response = await fetch(URI, data);
        
        if(response.status !== 200) {
            throw new Error('error');
        }
        const userData = await response.json();
        
        sessionStorage.setItem('email', userData.email);
        sessionStorage.setItem('userId', userData._id);
        sessionStorage.setItem('accessToken', userData.accessToken);

        window.location.href = './index.html';
    } catch(error) {
        throw new Error('Error');
    }

}