
function areaAndVolumeCalculator(area, vol, input) {
    let inputs = JSON.parse(input);
    
    function calc (inp) {
    
      let areaObj = area.call(inp);
      let volObj = vol.call(inp);
      
       return {
           area: areaObj,
           volume: volObj,
       };
    }
  return inputs.map(calc);
 }


function area() {
    return Math.abs(this.x * this.y);  
};

function vol() {
    return Math.abs(this.x * this.y * this.z);  
};