function toggle() {
    const button = document.getElementsByClassName('button')[0].textContent;
    const less = 'Less';
    const more = 'More';
    if (button === 'More') {
        document.getElementsByClassName('button')[0].textContent = less;
        document.getElementById('extra').style.display = 'block';
    } else if (button === 'Less') {
        document.getElementsByClassName('button')[0].textContent = more;
        document.getElementById('extra').style.display = 'none';
    }
}