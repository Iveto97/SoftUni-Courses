async function getInfo() {

    const busStopIdRef = document.getElementById('stopId');
    let busStop = busStopIdRef.value;
    const stopNameRef = document.getElementById('stopName');
    const uListRef = document.getElementById('buses');


    const url = `http://localhost:3030/jsonstore/bus/businfo/${busStop}`;

    try{ 
        const response =  await fetch((url), {method: 'GET' });
        let data = await response.json();

        let entries = Array.from(Object.entries(data.buses))
        stopNameRef.textContent = data.name;

        clear();

        entries.forEach(element => {
            let listElement = document.createElement('li');
            listElement.textContent = `Bus ${element[0]} arrives in ${element[1]} minutes`;
            uListRef.appendChild(listElement);
        })
    }
    catch(error){
        errorFunc();
        clear();
    }

    function errorFunc() {
        stopNameRef.textContent = 'Error';
    }
    
    function clear() {
        busStopIdRef.value = '';
        uListRef.innerHTML = '';
    }

    // fetch((url), {
    //     method: 'GET'
    // })
    // .then((respond) => {
    //     if(respond.status === 200) {
    //         return respond.json();
    //     } else {
    //         throw new Error(respond.status);
    //     }
    // })
    // .then((res) => {
    //     let entries = Array.from(Object.entries(res.buses))
    //     stopNameRef.textContent = res.name;
    //     entries.forEach(element => {
    //         let listElement = document.createElement('li');
    //         listElement.textContent = `Bus ${element[0]} arrives in ${element[1]} minutes`;
    //         uListRef.appendChild(listElement);
    //     });
    // })
    // .catch((error) => {
    //     stopNameRef.textContent = `Error`;
    // })
}