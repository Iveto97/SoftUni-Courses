function lockedProfile() {
    const moreBtn = Array.from(document.getElementsByTagName('button'));

    moreBtn.forEach(btn => {
        btn.addEventListener('click', moreInformation);
    });

    function moreInformation(event) {
        const unlockBtn = event.currentTarget.parentElement.children[4];
        const lockBtn = event.currentTarget.parentElement.children[2];
        const parentId = event.currentTarget.parentElement;
        const divMore = parentId.getElementsByTagName('div')[0];
        const curTarget = event.currentTarget;

        if (unlockBtn.checked) {
            if (curTarget.textContent === 'Show more') {
                divMore.style.display = 'block';
                curTarget.textContent = 'Hide it';

                if (lockBtn.checked) {
                    curTarget.disable = true;
                }
            } else if (curTarget.textContent === 'Hide it') {
                divMore.style.display = 'none';
                curTarget.textContent = 'Show more';
            }
        }
    }
}
