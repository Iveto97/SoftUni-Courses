function attachGradientEvents() {
    const gradient = document.getElementById('gradient');
    
    gradient.addEventListener('mouseover', mouseOver);
    gradient.addEventListener('mouseout', mouseOut);

    function mouseOver(event) {
        const gradientWidth = event.target.clientWidth;
        const positionOfTheMouse = event.offsetX / (gradientWidth - 1);
        const percentage = Math.trunc(positionOfTheMouse * 100);
        document.getElementById("result").textContent = percentage + "%";
    };

    function mouseOut() {
        document.getElementById('result').textContent = "";
    };
}