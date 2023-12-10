$('.toggle-menu').click(function () {
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