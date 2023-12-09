import { cats } from "./catSeeder.js";
import { catCreator } from "./catTemp.js";
import { onShow } from "./show.js";


const allCats = document.getElementById('allCats');

    allCats.innerHTML +=  catCreator(cats);

    document.querySelectorAll('button.showBtn').forEach(btn => {
        btn.addEventListener('click', onShow);
    });
