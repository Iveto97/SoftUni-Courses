import { html, render } from "../../node_modules/lit-html/lit-html.js";

export function homePage(ctx) {
    ctx.updateNav;
    const home = homeTemp();
    ctx.render(home);
   
}

function homeTemp() {
    return html `
         <!-- Home page -->
         <section id="home">
          <h1>Learn more about your favorite fruits</h1>
          <img
            src="./images/pexels-pixabay-161559-dImkWBDHz-transformed (1).png"
            alt="home"/>
        </section>
    `
}