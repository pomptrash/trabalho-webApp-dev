// função para carregar os partials 
function partialsLoad(id, file) {
    fetch(file)
        .then(response => response.text())
        .then(data => {
            document.getElementById(id).innerHTML = data
            darkMode()
        })
        .catch(error => console.error(`Erro ao carregar ${file}:`, error));
}

// chamando os componentes em todas as páginas
document.addEventListener("DOMContentLoaded", function () {
    partialsLoad("header", "../partials/header.html");
    partialsLoad("navbar", "../partials/navbar.html");
    partialsLoad("footer", "../partials/footer.html");
});

// modo noturno
function darkMode() {
    const body = document.querySelector('body');
    const darkModeBtn = document.querySelector('.darkModeBtn');
    const imgLogo = document.querySelector('.logo');
    const iconeDarkMode = document.querySelector('.iconeDarkMode');
    const navBar = document.querySelector('.navbar');

    // recupera o estado do modo noturno do localStorage e aplica ao carregar a página
    const activeDarkMode = localStorage.getItem('darkMode') === 'true';
    if (activeDarkMode) {
        body.classList.add('bg-dark', 'text-light');
        imgLogo.setAttribute('src', '../assets/img/logo-uninassau-light.png');
        iconeDarkMode.classList.remove('bi-moon');
        iconeDarkMode.classList.add('bi-brightness-high');
        navBar.classList.add('bg-dark', 'navbar-dark');
        darkModeBtn.checked = true;  // Marca o botão como ativado
    } else {
        body.classList.remove('bg-dark', 'text-light');
        imgLogo.setAttribute('src', '../assets/img/logo-uninassau-dark.png');
        iconeDarkMode.classList.add('bi-moon');
        iconeDarkMode.classList.remove('bi-brightness-high');
        navBar.classList.remove('bg-dark', 'navbar-dark');
    }

    // modo noturno (ativação/desativação)
    darkModeBtn.addEventListener('click', () => {
        const ativado = darkModeBtn.checked;

        if (ativado) {
            body.classList.add('bg-dark', 'text-light');
            imgLogo.setAttribute('src', '../assets/img/logo-uninassau-light.png');
            iconeDarkMode.classList.remove('bi-moon');
            iconeDarkMode.classList.add('bi-brightness-high');
            navBar.classList.add('bg-dark', 'navbar-dark');
        } else {
            body.classList.remove('bg-dark', 'text-light');
            imgLogo.setAttribute('src', '../assets/img/logo-uninassau-dark.png');
            iconeDarkMode.classList.add('bi-moon');
            iconeDarkMode.classList.remove('bi-brightness-high');
            navBar.classList.remove('bg-dark', 'navbar-dark');
        }

        // salva o estado atual do modo no localStorage
        localStorage.setItem('darkMode', ativado.toString());
    });
}

