function getArticleGenerator(articles) {

    const divRef = document.getElementById('content');
    let sentence = articles.slice();

    console.log(sentence);
    return function showNex() {

        if (sentence[0] !== undefined) {
            let article = document.createElement('article');
            article.textContent = sentence.shift();
            divRef.appendChild(article);

        }
    };

}
