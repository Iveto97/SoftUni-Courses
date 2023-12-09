
export function hideEl() {
    const sections = document.querySelectorAll('div.container section');
    sections.forEach((section) => (section.style.display = "none"));
}
