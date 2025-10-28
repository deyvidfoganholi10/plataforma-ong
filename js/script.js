// Seleciona o hambúrguer e o menu
const hamburguer = document.getElementById('hamburguer');
const menu = document.getElementById('menu');

// Adiciona evento de clique no hambúrguer
hamburguer.addEventListener('click', () => {
    menu.classList.toggle('active'); // Mostra ou esconde o menu
});

// Fecha o menu ao clicar em um link (opcional)
const links = menu.querySelectorAll('a');
links.forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('active');
    });
});
