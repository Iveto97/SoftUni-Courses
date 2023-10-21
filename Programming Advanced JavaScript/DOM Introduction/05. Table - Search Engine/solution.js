function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let inputText = document.getElementById('searchField').value;
      let tableRow = Array.from(document.querySelectorAll('tbody tr'));
      tableRow.forEach(row => {
         let tableData = row.querySelectorAll('td');
         for (const cell of tableData) {
            if (cell.textContent.includes(inputText)) {
               row.classList.add('select');
               break;
            } else {
               row.classList.remove('select');
            }
         }
      });
      document.getElementById('searchField').value = '';
   }
}