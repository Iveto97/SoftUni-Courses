import { html, render } from '../node_modules/lit-html/lit-html.js';

const main = document.querySelector('#content');

export function homePage() {
    const home = homeTemp();
    render(home, main);
}


function homeTemp() {
    return html `
        <section id="home">
            <h1>Welcome to our website, where curiosity meets enjoyment!
                Discover fascinating fun facts that engage and entertain everyone,
                inviting you to participate in the joy of learning something new together.</h1>
            <img id="logo-img" src="./images/logo.png" alt=""/>
        </section>
    `
}