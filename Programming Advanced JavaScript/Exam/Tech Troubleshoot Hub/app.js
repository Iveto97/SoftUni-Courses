window.addEventListener('load', solution);

function solution() {
  
  const empInputRef = document.getElementById('employee');
  const catInputRef = document.getElementById('category');
  const urgencyInputRef = document.getElementById('urgency');
  const teamInputRef = document.getElementById('team');
  const describeInputRef = document.getElementById('description');
  const addBtn = document.getElementById('add-btn');
  const previewUlRef = document.querySelector('.preview-list');
  const pendingUlRef = document.querySelector('.pending-list');
  const resolvedRef = document.querySelector('.resolved-list');
 

  addBtn.addEventListener('click', onAdd);

  function onAdd(event) {
    event.preventDefault();

    if(empInputRef.value === '' || catInputRef.value === '' || urgencyInputRef.value === '' ||
    teamInputRef.value === '' || describeInputRef.value === '') {
      return;
    }
    
    let listElement = document.createElement('li');
    listElement.setAttribute('class', 'problem-content');

    let article = document.createElement('article');

    let namePara = document.createElement('p');
    namePara.textContent = `From: ${empInputRef.value}`;

    let catPara = document.createElement('p');
    catPara.textContent = `Category: ${catInputRef.value}`;

    let urgencyPara = document.createElement('p');
    urgencyPara.textContent = `Urgency: ${urgencyInputRef.value}`;

    let teamPara = document.createElement('p');
    teamPara.textContent = `Assigned to: ${teamInputRef.value}`;

    let desPara = document.createElement('p');
    desPara.textContent = `Description: ${describeInputRef.value}`;

    let editBtn = document.createElement('button');
    editBtn.setAttribute('class', 'edit-btn');
    editBtn.textContent = 'Edit';

    let continueBtn = document.createElement('button');
    continueBtn.setAttribute('class', 'continue-btn');
    continueBtn.textContent = 'Continue';

    article.appendChild(namePara);
    article.appendChild(catPara);
    article.appendChild(urgencyPara);
    article.appendChild(teamPara);
    article.appendChild(desPara);

    listElement.appendChild(article);
    listElement.appendChild(editBtn);
    listElement.appendChild(continueBtn);

    previewUlRef.appendChild(listElement);

    addBtn.disabled = true;

    let nameInfo = empInputRef.value;
    let catInfo = catInputRef.value;
    let urgencyInfo = urgencyInputRef.value;
    let teamInfo = teamInputRef.value;
    let desInfo = describeInputRef.value;

    empInputRef.value = '';
    catInputRef.value = '';
    urgencyInputRef.value = '';
    teamInputRef.value = '';
    describeInputRef.value = '';

    editBtn.addEventListener('click', onEdit);

    function onEdit() {

      empInputRef.value = nameInfo;
      catInputRef.value = catInfo;
      urgencyInputRef.value = urgencyInfo;
      teamInputRef.value = teamInfo;
      describeInputRef.value = desInfo;

      listElement.remove();
      addBtn.disabled = false;

    }

    continueBtn.addEventListener('click', onContinue);

    function onContinue() {
      
      let listContinueEl = document.createElement('li');
      listContinueEl.setAttribute('class', 'problem-content');

      let articlePending = document.createElement('article');
      articlePending = article;

      let resolveBtn = document.createElement('button');
      resolveBtn.setAttribute('class', 'resolve-btn');
      resolveBtn.textContent = 'Resolve';

      listContinueEl.appendChild(articlePending);
      listContinueEl.appendChild(resolveBtn);
      listElement.remove();

      pendingUlRef.appendChild(listContinueEl);

      resolveBtn.addEventListener('click', onResolve);

      function onResolve() {

        let listResolveEl = document.createElement('li');
        listResolveEl.setAttribute('class', 'problem-content');

        let articleResolve = document.createElement('article');
        articleResolve = article;

        let clearBtn = document.createElement('button');
        clearBtn.setAttribute('class', 'clear-btn');
        clearBtn.textContent = 'Clear';

        listResolveEl.appendChild(articleResolve);
        listResolveEl.appendChild(clearBtn);
        listContinueEl.remove();

        resolvedRef.appendChild(listResolveEl);

        clearBtn.addEventListener('click', onClear);

        function onClear() {
          listResolveEl.remove();
        }
      }

    }
  }
}


    
    
