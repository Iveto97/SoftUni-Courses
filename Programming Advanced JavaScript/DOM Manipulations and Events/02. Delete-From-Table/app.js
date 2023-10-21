function deleteByEmail() {
    let inputField = document.getElementsByName('email')[0].value;
    const tableRows = document.querySelectorAll('#customers tbody tr td:nth-child(2)');

    for (const col of tableRows) {
        const data = col.textContent;
        
        if(data.includes(inputField)){
            const row = col.parentNode;
            const parentRow = row.parentNode;
            parentRow.removeChild(row);
            
            document.getElementById('result').textContent = 'Deleted.';
            document.getElementsByName('email')[0].value = '';
            
            return;
        }
    }
    document.getElementById('result').textContent = "Not found.";
}