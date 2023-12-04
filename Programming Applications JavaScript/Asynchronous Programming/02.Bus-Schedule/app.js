function solve() {

    let url = 'http://localhost:3030/jsonstore/bus/schedule/';
    const spanRef = document.querySelector('div[id="info"] span');
    const depBtnRef = document.getElementById('depart');
    const arriveBtnRef = document.getElementById('arrive');

    let idBusStop = 'depot';
    let currentStop = '';

    /*async*/ function depart() {
        // try {
        //     const response = await fetch ((url + idBusStop), {method: 'GET'});
        //     const dataStop = await response.json();

        //     spanRef.textContent = `Next stop ${dataStop.name}`;
        //     depBtnRef.disabled = true;
        //     arriveBtnRef.disabled = false;

        //     idBusStop = dataStop.next;
        //     currentStop = dataStop.name;
        // } catch(e) {
        //     depBtnRef.disabled = true;
        //     arriveBtnRef.disabled = true;
        //     spanRef.textContent = 'Error';
        // }

        fetch ((url + idBusStop), {method: 'GET'})
        .then((response) => {
            if(response.status === 200) {
                return response.json();
            } else {
                throw new Error (response.status);
            }
        })
        .then((res) => {
            depBtnRef.disabled = true;
            arriveBtnRef.disabled = false;

            spanRef.textContent = `Next stop ${res.name}`;
            
            idBusStop = res.next;
            currentStop = res.name;
        })
        .catch((error) => {
            depBtnRef.disabled = true;
            arriveBtnRef.disabled = true;

            spanRef.textContent = 'Error';
        })
    }

    function arrive() {
        depBtnRef.disabled = false;
        arriveBtnRef.disabled = true;
        spanRef.textContent = `Arriving at ${currentStop}`;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();