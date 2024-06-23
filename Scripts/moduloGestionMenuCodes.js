// Menu horizontal interaction
const menuItems = document.querySelectorAll('.elementMenuHorizontal');
const languageContainers = document.querySelectorAll('.conteneurLangage');

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        const target = item.getAttribute('data-langage');
        languageContainers.forEach(container => {
            container.classList.remove('active');
            if (container.id === target) {
                container.classList.add('active');
            }
        });
    });
});