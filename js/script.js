const menuItems = document.querySelectorAll('.menu-dropdown a');

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        // Esconde o menu dropdown quando um item é clicado
        document.querySelector('.menu-toggle').checked = false;
    });
});

$('.menu-toggle').click(function () {
    $(this).toggleClass('active');
    $('#menu').toggleClass('open');
});

window.addEventListener('resize', function () {
    var menuToggle = document.querySelector('.menu-toggle');
    var menuDropdown = document.querySelector('.menu-dropdown');

    if (window.innerWidth > 768) { // Substitua 768 pela largura máxima desejada
        menuDropdown.style.display = 'none';
        menuToggle.checked = false;
    }
});

// Função para trocar os valores exibidos
function trocarValores() {
    const valor1 = document.getElementById('valor1');
    const valor2 = document.getElementById('valor2');
    const checkbox = document.getElementById('trocarValores');

    checkbox.addEventListener('change', function () {
        const temp = valor1.textContent;
        valor1.textContent = valor2.textContent;
        valor2.textContent = temp;
    });
}

// Chamada da função após o carregamento do documento
document.addEventListener('DOMContentLoaded', trocarValores);


