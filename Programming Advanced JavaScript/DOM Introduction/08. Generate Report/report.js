function generateReport() {
    const inputBox = document.querySelectorAll('thead tr input');
    const tableRowData = document.querySelectorAll('tbody tr');
   
    let reportArr = [];
    let genReportArr = [];

   for (let index = 0; index < inputBox.length; index++) {
    let element = inputBox[index];
    if(element.checked) {
        let name = element.name;
        reportArr.push([name, Number(index)]);
    }
   }

   for (let row = 0; row < tableRowData.length; row++) {
    let generateReport = {};
    let curRow = tableRowData[row].children;
    for (let col = 0; col < curRow.length; col++) {
        for (const iterator of reportArr) {
            if(iterator.includes(col)){
                generateReport[iterator[0]] = curRow[col].textContent;
            }
        }   
    }   
   genReportArr.push(generateReport);

}  
const reportToJson = JSON.stringify(genReportArr);
document.getElementById('output').textContent = reportToJson;

}