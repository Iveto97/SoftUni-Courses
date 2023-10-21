function filterEmployees (string, criteria) {

    const employeesObj = JSON.parse(string);

    if(criteria === 'all') {
        for (const key in employeesObj) {
            console.log(`${employeesObj[key].id - 1}. ${employeesObj[key].first_name} ${employeesObj[key].last_name} - ${employeesObj[key].email}`);
            
        }
    } else {
        let [criteriaKey, criteriaValue] = criteria.split('-');

        let result = employeesObj.filter((employee) => employee[criteriaKey] === criteriaValue);
    
        for (let index = 0; index < result.length; index++) {
    
            console.log(`${index}. ${result[index].first_name} ${result[index].last_name} - ${result[index].email}`);
             
        }
    } 
}
filterEmployees(`[{

    "id": "1", 
    "first_name": "Kaylee",  
    "last_name": "Johnson",  
    "email": "k0@cnn.com",  
    "gender": "Female"   
    }, 
    {
    "id": "2", 
    "first_name": "Kizzee", 
    "last_name": "Johnson", 
    "email": "kjost1@forbes.com", 
    "gender": "Female" 
    }, 
    { 
        "id": "3", 
    "first_name": "Evanne", 
    "last_name": "Maldin", 
    "email": "emaldin2@hostgator.com", 
    "gender": "Male" }, 
    { 
    "id": "4", 
    "first_name": "Evanne", 
    "last_name": "Johnson", 
    "email": "ev2@hostgator.com", 
    "gender": "Male" }]`, 
    'all');