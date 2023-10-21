function create(words) {
   const contentDiv = document.getElementById('content');

   for (const word of words) {
      const difElement = document.createElement('div');
      const pElement = document.createElement('p');
      pElement.style.display = 'none';
      pElement.textContent = word;

      difElement.appendChild(pElement);
      contentDiv.appendChild(difElement);
   }

   const difElements = Array.from(contentDiv.children);

   difElements.forEach(element => {
      element.addEventListener('click', displayParagraphs);
   });

   function displayParagraphs(event) {
      const difRef = event.currentTarget;
      const pRef = difRef.children[0];
      pRef.style.display = 'block';
   }
}