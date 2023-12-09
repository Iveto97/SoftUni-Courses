import { getData } from "./requester.js";
import { creator } from "./rowTemp.js";

async function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   const tableBody = document.querySelector('.container tbody');

   const data = await getData();
   const studentsData = Object.values(data);

   studentsData.forEach(student => {
      tableBody.innerHTML += creator(student);
   })

   function onClick() {
      const inputValue = document.getElementById('searchField').value;
      let tableRow = Array.from(document.querySelectorAll('tbody tr'));
      tableRow.forEach(row => {
         let tableData = row.querySelectorAll('td');
         for (const cell of tableData) {
            if (cell.textContent.includes(inputValue)) {
               row.setAttribute('class', 'select');
               return
            } else {
               row.removeAttribute('class', 'select');
            }
         }
      });
      document.getElementById('searchField').value = '';

   }
}

solve();