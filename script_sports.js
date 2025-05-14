document.getElementById('theme-toggle').addEventListener('click', function () {
    // Переключение темы
    document.body.classList.toggle('dark-theme');

    const isDark = document.body.classList.contains('dark-theme');

    // Логотип
    const logo = document.getElementById('main-logo');
    if (logo) {
        logo.src = isDark ? 'logok_s_dark.jpg' : 'logok_s.jpg';
    }

    // Иконки поиска и смены темы
    const iconTheme = document.getElementById('icon-theme');
    const iconSearch = document.getElementById('icon-search');
    if (iconTheme) iconTheme.src = isDark ? 'images/icons/theme-dark.png' : 'images/icons/theme.png';
    if (iconSearch) iconSearch.src = isDark ? 'images/icons/search-dark.png' : 'images/icons/search.png';

    // Иконки соцсетей
    const telegram = document.getElementById('icon-telegram');
    const instagram = document.getElementById('icon-instagram');
    const facebook = document.getElementById('icon-facebook');
    if (telegram) telegram.src = isDark ? 'images/icons/telegram-dark.png' : 'images/icons/telegram.png';
    if (instagram) instagram.src = isDark ? 'images/icons/instagram-dark.png' : 'images/icons/instagram.png';
    if (facebook) facebook.src = isDark ? 'images/icons/facebook-dark.png' : 'images/icons/facebook.png';

    // Добавим лог (необязательно)
    console.log(`Theme changed to: ${isDark ? 'dark' : 'light'}`);
});
