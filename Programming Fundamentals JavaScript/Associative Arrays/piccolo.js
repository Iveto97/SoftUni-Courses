                    /* --------- Object --------- */
/*function piccolo(carData) {

    let  carNumbers = {};

    for (const number of carData) {
        let [command, carNum] = number.split(', ');

        if(command === 'IN') {
            carNumbers[carNum] = 'in';
        } else if (command === 'OUT') {
            carNumbers[carNum] = 'out';
        }
    }

    let sortedNumber = Object.entries(carNumbers)
    .filter(pairs => pairs[1] === 'in');

    //.sort((a,b) => a[0].localeCompare(b[0]))

    let re = new RegExp('[0-9]');
    let res = '';
    for (const pair of sortedNumber) {
        let car = pair[0];
        let reg = /[0-9]/g;
         res += `${car.match(reg)} `;
        
        let regStr = `${res}`
       
    }
   
    console.log(res.join(" "));

    if(sortedNumber.length === 0) {
        console.log('Parking Lot is Empty');
    } else {
        sortedNumber.forEach(car => {
            console.log(`${car[0]}`);
        });
    }
}*/

                    /* --------- Map --------- */

/*function piccolo(carData) {

    let  carNumbers = new Map();

    for (const number of carData) {
        let [command, carNum] = number.split(', ');

        if(command === 'IN') {
            carNumbers.set(carNum);
        } else if (command === 'OUT') {
            carNumbers.delete(carNum);
        }
    }
    
    let sortedNumber = Array.from(carNumbers.keys()).sort((a,b) => a.localeCompare(b));

    let re = new RegExp('[0-9]');
    let res = '';
    for (const pair of sortedNumber) {
        let car = pair[0];
        let reg = /[0-9]/g;
         res += `${car.match(reg)} `;
        
        let regStr = `${res}`
       
    }
    console.log(res);
    if(sortedNumber.length === 0) {
        console.log('Parking Lot is Empty');
    } else {
        sortedNumber.forEach(car => {
            console.log(`${car}`);
        });
    }
} */

                    /* --------- Set --------- */

function piccolo(carData) {

    let  carNumbers = new Set();

    for (const number of carData) {
        let [command, carNum] = number.split(', ');

        if(command === 'IN') {
            carNumbers.add(carNum);
        } else if (command === 'OUT') {
            carNumbers.delete(carNum);
        }
    }
    
    let sortedNumber = Array.from(carNumbers.keys()).sort((a,b) => a.localeCompare(b));

    /*let re = new RegExp('[0-9]');
    let res = '';
    k=[];
    for (const pair of sortedNumber) {
        
            res += re.exec(pair);
           let k = res.push();
            console.log(k);
    }*/
   
    if(sortedNumber.length === 0) {
        console.log('Parking Lot is Empty');
    } else {
        sortedNumber.forEach(car => {
            console.log(`${car}`);
        });
    }
}
piccolo(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU']
);