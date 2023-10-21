function calculator() {
   let firstSelector;
   let secondSelector;
   let resSelector;

   return {
      init: function (selector1, selector2, resultSelector) {
         firstSelector = document.querySelector(selector1);
         secondSelector = document.querySelector(selector2);
         resSelector = document.querySelector(resultSelector);

      },

      add: function () {
         let numOne = Number(firstSelector.value);
         let numTwo = Number(secondSelector.value);
         let sum = numOne + numTwo;
         resSelector.value = sum;

      },

      subtract: function () {
         let numOne = Number(firstSelector.value);
         let numTwo = Number(secondSelector.value);
         let sum = numOne - numTwo;
         resSelector.value = sum;
      },
   }
}




