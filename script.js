// Seleciona os elementos do menu
const burger = document.getElementById('burger');
const navLinks = document.getElementById('nav-links');

// Adiciona evento de clique no menu hambúrguer (mobile)
burger.addEventListener('click', () => {
    // Alterna a classe para mostrar/esconder o menu
    navLinks.classList.toggle('nav-active');
    
    // Animação do hambúrguer virando X
    burger.classList.toggle('toggle');
});

// Fechar o menu mobile quando clicar em um link
const links = document.querySelectorAll('.nav-links a');
links.forEach(link => {
    link.addEventListener('click', () => {
        if (navLinks.classList.contains('nav-active')) {
            navLinks.classList.remove('nav-active');
            burger.classList.remove('toggle');
        }
    });
});

// Injetar script do LinkedIn
const linkedInScript = document.createElement('script');
linkedInScript.src = 'https://platform.linkedin.com/badges/js/profile.js';
linkedInScript.async = true;
linkedInScript.defer = true;
linkedInScript.type = 'text/javascript';
document.head.appendChild(linkedInScript);

console.log("0");