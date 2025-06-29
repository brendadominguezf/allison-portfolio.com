function changeLanguage(lang) {
    // Oculta todo el contenido
    document.querySelectorAll('.lang').forEach(element => {
        element.classList.add('hidden');
    });

    // Muestra el contenido del idioma seleccionado
    document.querySelectorAll(`.${lang}`).forEach(element => {
        element.classList.remove('hidden');
    });
}