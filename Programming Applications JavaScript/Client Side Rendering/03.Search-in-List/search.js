import { towns } from "./towns.js";
import { createTemp } from "./createView.js";

const div = document.getElementById('towns');
const input = document.getElementById('searchText');

div.innerHTML = createTemp(towns);

const btn = document.querySelector('button');
btn.addEventListener('click', search);

const townsName = document.querySelectorAll('li');


function search() {
   const townName = input.value;
   input.value = '';
   let countMatches = 0;
   
   townsName.forEach(town => {
      const townList = town.textContent.trim('');

      if(townList.includes(townName)){
         town.style.fontWeight = 'bold';
         town.style.textDecoration = 'underline';
         countMatches++;
      } else {
         town.style.fontWeight = '';
         town.style.textDecoration = 'none';
      }
   })
   document.getElementById('result').textContent = `${countMatches} matches found`;

}
