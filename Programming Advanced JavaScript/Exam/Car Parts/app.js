window.addEventListener('load', solve);

function solve() { 

    let modelCarRef = document.getElementById('car-model');
    const yearCarRef = document.getElementById('car-year');
    const partNameRef = document.getElementById('part-name');
    const partNumberRef = document.getElementById('part-number');
    const conditionRef = document.getElementById('condition');
    const nextBtn = document.getElementById('next-btn');
    const ulPartInfo = document.querySelector('.info-list');
    let paraComRef = document.getElementById('complete-text');
    let image = document.getElementById('complete-img');
    const confirmUlRef = document.querySelector('.confirm-list');



    nextBtn.addEventListener('click', listedInfToThePartInf);

    function listedInfToThePartInf(event) {
        event.preventDefault();
        
        if(modelCarRef.value === '' || yearCarRef.value === '' || partNameRef.value === ''
         || partNumberRef.value === '' || conditionRef.value === '') {
        return;
        }

    let year = Number(yearCarRef.value);

    if(year < 1980 || year > 2023) {
        return;
    }

    image.style.visibility = 'hidden';
    paraComRef.textContent = '';

        let listElement = document.createElement('li');
        listElement.setAttribute('class', 'part-content');

        let article = document.createElement('article');

        let modelPara = document.createElement('p');
        modelPara.textContent = `Car Model: ${modelCarRef.value}`;

        let yearPara = document.createElement('p');
        yearPara.textContent = `Car Year: ${yearCarRef.value}`;

        let partNamePara = document.createElement('p');
        partNamePara.textContent = `Part Name: ${partNameRef.value}`;

        let partNumberPara = document.createElement('p');
        partNumberPara.textContent = `Part Number: ${partNumberRef.value}`;

        let conPara = document.createElement('p');
        conPara.textContent = `Condition: ${conditionRef.value}`;

        let editBtn = document.createElement('button');
        editBtn.setAttribute('class', 'edit-btn');
        editBtn.textContent = 'Edit';

        let continueBtn = document.createElement('button');
        continueBtn.setAttribute('class', 'continue-btn');
        continueBtn.textContent = 'Continue';

        article.appendChild(modelPara);
        article.appendChild(yearPara);
        article.appendChild(partNamePara);
        article.appendChild(partNumberPara);
        article.appendChild(conPara);

        listElement.appendChild(article);
        listElement.appendChild(editBtn);
        listElement.appendChild(continueBtn);

        ulPartInfo.appendChild(listElement);

        nextBtn.disabled = true;

        let modelInfo =  modelCarRef.value;
        let yearInfo = yearCarRef.value;
        let nameInfo = partNameRef.value;
        let numberInfo = partNumberRef.value;
        let conditionInfo = conditionRef.value;

        modelCarRef.value = '';
        yearCarRef.value = '';
        partNameRef.value = '';
        partNumberRef.value = ''; 
        conditionRef.value = '';

        editBtn.addEventListener('click', onEdit);

        function onEdit() {

                modelCarRef.value = modelInfo;
                yearCarRef.value = yearInfo;
                partNameRef.value = nameInfo;
                partNumberRef.value = numberInfo;
                conditionRef.value = conditionInfo;

                listElement.remove();
                nextBtn.disabled = false;
        }

        continueBtn.addEventListener('click', onContinue) 

        function onContinue() {

                let listComplElement = document.createElement('li');
                listComplElement.setAttribute('class', 'part-content');

                let articleComplEl = document.createElement('article');
                articleComplEl = article;

                let confBtn = document.createElement('button');
                confBtn.setAttribute('class', 'confirm-btn');
                confBtn.textContent = 'Confirm';
        
                let cancelBtn = document.createElement('button');
                cancelBtn.setAttribute('class', 'cancel-btn');
                cancelBtn.textContent = 'Cancel';

                listComplElement.appendChild(articleComplEl);
                listComplElement.appendChild(confBtn);
                listComplElement.appendChild(cancelBtn);
                listElement.remove();

                confirmUlRef.appendChild(listComplElement);

                confBtn.addEventListener('click', onConfirm);

                function onConfirm() {
                        listComplElement.remove();

                        nextBtn.disabled = false;
                        paraComRef.textContent = 'Part is Ordered!';
                        image.style.visibility = 'visible';
                }

                cancelBtn.addEventListener('click', onCancel);

                function onCancel() {
                        listComplElement.remove();
                        nextBtn.disabled = false;
                }
        }
    }
};


    
    
