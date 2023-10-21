function solve() {
   const addButtons = Array.from(document.querySelectorAll('.add-product'));
   const textAreaRef = document.querySelector('.shopping-cart textarea');
   const checkButRef = document.querySelector('.checkout');

   let totalPrice = 0;
   let productList = [];

   addButtons.forEach(button => {
         button.addEventListener('click', addProduct);
   });

   function addProduct(event) {
      const buttonParentRef = event.target.parentElement;
      const parentRef = buttonParentRef.parentElement;
      const price = Number(parentRef.children[3].textContent);
      const productDetails = parentRef.children[1];
      const product = productDetails.children[0].textContent;

      totalPrice += price;
      if(!productList.includes(product)){
         productList.push(product);
      }
      
      textAreaRef.textContent += `Added ${product} for ${price.toFixed(2)} to the cart.\n`;
      
   }


   checkButRef.addEventListener('click', checkOut);

   function checkOut() {
      textAreaRef.textContent += `You bought ${productList.join(', ')} for ${totalPrice.toFixed(2)}.`;
      
      addButtons.forEach(btn => {
         btn.disabled = true;
      });
      checkButRef.disabled = true;
   }
}