function search() {
   let contentField = document.getElementById('searchText').value;
   const towns = Array.from(document.querySelectorAll('#towns li'));
   let countMatches = 0;

   towns.forEach(town => {
      if(town.textContent.includes(contentField)) {
         town.style.fontWeight = 'bold';
         town.style.textDecoration = 'underline';
         countMatches++;
      } else {
         town.style.fontWeight = '';
         town.style.textDecoration = 'none';
      } 
   }); 
   document.getElementById('result').textContent = `${countMatches} matches found`;
}
