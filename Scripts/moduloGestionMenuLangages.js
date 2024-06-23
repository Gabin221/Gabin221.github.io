function addMenuEventListeners() {
    const menuItemsPartieCpp = document.querySelectorAll('.elementMenuHorizontalPartieCpp');
    const languageContainersPartieCpp = document.querySelectorAll('.contenuLangagePartieCpp');
    
    menuItemsPartieCpp.forEach(item => {
        item.addEventListener('click', () => {
            const target = item.getAttribute('data-langage');
            languageContainersPartieCpp.forEach(container => {
                container.classList.remove('active');
                if (container.id === target) {
                    container.classList.add('active');
                }
            });
        });
    });

    const menuItemsPartieKotlin = document.querySelectorAll('.elementMenuHorizontalPartieKotlin');
    const languageContainersPartieKotlin = document.querySelectorAll('.contenuLangagePartieKotlin');

    menuItemsPartieKotlin.forEach(item => {
        item.addEventListener('click', () => {
            const target = item.getAttribute('data-langage');
            languageContainersPartieKotlin.forEach(container => {
                container.classList.remove('active');
                if (container.id === target) {
                    container.classList.add('active');
                }
            });
        });
    });

    const menuItemsPartieLatex = document.querySelectorAll('.elementMenuHorizontalPartieLatex');
    const languageContainersPartieLatex = document.querySelectorAll('.contenuLangagePartieLatex');

    menuItemsPartieLatex.forEach(item => {
        item.addEventListener('click', () => {
            const target = item.getAttribute('data-langage');
            languageContainersPartieLatex.forEach(container => {
                container.classList.remove('active');
                if (container.id === target) {
                    container.classList.add('active');
                }
            });
        });
    });

    const menuItemsPartieLinux = document.querySelectorAll('.elementMenuHorizontalPartieLinux');
    const languageContainersPartieLinux = document.querySelectorAll('.contenuLangagePartieLinux');

    menuItemsPartieLinux.forEach(item => {
        item.addEventListener('click', () => {
            const target = item.getAttribute('data-langage');
            languageContainersPartieLinux.forEach(container => {
                container.classList.remove('active');
                if (container.id === target) {
                    container.classList.add('active');
                }
            });
        });
    });

    const menuItemsPartiePython = document.querySelectorAll('.elementMenuHorizontalPartiePython');
    const languageContainersPartiePython = document.querySelectorAll('.contenuLangagePartiePython');

    menuItemsPartiePython.forEach(item => {
        item.addEventListener('click', () => {
            const target = item.getAttribute('data-langage');
            languageContainersPartiePython.forEach(container => {
                container.classList.remove('active');
                if (container.id === target) {
                    container.classList.add('active');
                }
            });
        });
    });

    const menuItemsPartieShell = document.querySelectorAll('.elementMenuHorizontalPartieShell');
    const languageContainersPartieShell = document.querySelectorAll('.contenuLangagePartieShell');

    menuItemsPartieShell.forEach(item => {
        item.addEventListener('click', () => {
            const target = item.getAttribute('data-langage');
            languageContainersPartieShell.forEach(container => {
                container.classList.remove('active');
                if (container.id === target) {
                    container.classList.add('active');
                }
            });
        });
    });

    const menuItemsPartieWeb = document.querySelectorAll('.elementMenuHorizontalPartieWeb');
    const languageContainersPartieWeb = document.querySelectorAll('.contenuLangagePartieWeb');

    menuItemsPartieWeb.forEach(item => {
        item.addEventListener('click', () => {
            const target = item.getAttribute('data-langage');
            languageContainersPartieWeb.forEach(container => {
                container.classList.remove('active');
                if (container.id === target) {
                    container.classList.add('active');
                }
            });
        });
    });
}