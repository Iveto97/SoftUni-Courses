const baseURI = 'http://localhost:3030/jsonstore/collections/students';

const submitBtn = document.getElementById('submit');
submitBtn.addEventListener('click', onSubmit);

const tBodyRef = document.getElementById('results').children[1];

function onSubmit(e) {
e.preventDefault();
tBodyRef.innerHTML = '';


    const formData = new FormData(e.target.parentElement);

    const firstName = formData.get('firstName');
    const lastName = formData.get('lastName');
    const facultyNumber = formData.get('facultyNumber');
    const grade = formData.get('grade');

    if (!firstName || !lastName || !facultyNumber || !grade) {
        throw new Error('error');
    }

    const data = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            firstName,
            lastName,
            facultyNumber,
            grade
        })
    }

    fetch(baseURI, data)
    .then((result) => {
        if(result.status === 200) {
            return result.json();
        } else {
            throw new Error (result.status);
        }
    })
    .then ((res) => {
        create();
     })
     .catch((error) => {
         console.log(error)
     })
  
}


function create() {
    const httpRequest = new XMLHttpRequest();
    httpRequest.addEventListener('readystatechange', function () {
    if (httpRequest.readyState == 4 && httpRequest.status == 200) {
     const data =  Object.values(JSON.parse(httpRequest.responseText));
     data.forEach(element => {
        const tr = document.createElement('tr');

        const nameTD = document.createElement('td');
        nameTD.textContent = element.firstName;

        const lastNameTd = document.createElement('td');
        lastNameTd.textContent = element.lastName;

        const facNum = document.createElement('td');
        facNum.textContent = element.facultyNumber;

        const grade = document.createElement('td');
        grade.textContent = element.grade;

        tr.appendChild(nameTD);
        tr.appendChild(lastNameTd);
        tr.appendChild(facNum);
        tr.appendChild(grade);

        tBodyRef.appendChild(tr)
     })
    }
 })
httpRequest.open("GET", baseURI);
httpRequest.send();

}

