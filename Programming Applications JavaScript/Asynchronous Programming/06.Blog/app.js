async function attachEvents() {
    const baseURL = 'http://localhost:3030/jsonstore/blog/';
    const postEndpoint = 'posts';
    const commentsEndpoint = 'comments';

    const loadPostBtn = document.getElementById('btnLoadPosts');
    const selectBtnRef = document.getElementById('posts');
    const viewBtn = document.getElementById('btnViewPost');
    const bodyInfRef = document.getElementById('post-body');
    const commentsUlRef = document.getElementById('post-comments');
    const title = document.getElementById('post-title');

    loadPostBtn.addEventListener('click', createOption);

    async function createOption(e) {
        const posts = await getAllPost();
        selectBtnRef.textContent = '';
        Object.entries(posts).forEach ( x =>  {
            const optionElement = generateDomElement('option', x[1].title, x[1].id);
            selectBtnRef.appendChild(optionElement);
        })
    }

    viewBtn.addEventListener('click', createPost);

    async function createPost() {
        const idPost = selectBtnRef.value;
        const response = await fetch((`${baseURL}${commentsEndpoint}`), {method: 'Get'});
        const data = await response.json();
        commentsUlRef.textContent = '';

        for (const com in data) {
            if(data[com].postId === idPost) {
                const listEl = document.createElement('li');
                listEl.setAttribute('id', data[com].postId)
                listEl.textContent = data[com].text;
                commentsUlRef.appendChild(listEl);
            }
        }

        const postData = await getAllPost();

        const postInfo = generatePost(postData, idPost);

        const para = document.createElement('p');

        bodyInfRef.textContent = postInfo[0];
        title.textContent = postInfo[1];
        
        // bodyInfRef.textContent = '';
        // bodyInfRef.appendChild(para);
        
    }





    async function getAllPost() {
        const response = await fetch((baseURL + postEndpoint), {method: 'GET'});
        const data = await response.json();

        return data;
    }

    function generatePost(info, id) {
        for (const key in info) {
            if(info[key].id === id){
               return [info[key].body, info[key].title];
            }; 
        }
    }

    
    function generateDomElement(type, content, id) {
        const element = document.createElement(type);

        if(type === 'input' && type === 'textarea') {
            element.value = content;
        } else if (type === 'option') {
            element.value = id;
            element.textContent = content;
        } else {
            element.textContent = content;
        }

        return element;
    }
}

attachEvents();