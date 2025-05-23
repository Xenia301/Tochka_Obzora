document.addEventListener("DOMContentLoaded", function () {
    const video = document.getElementById("video1");
    const downloadBtn = document.getElementById("downloadBtn");
    const viewCountElem = document.getElementById("viewCount");
    const downloadCountElem = document.getElementById("downloadCount");

    // Загружаем счётчики из localStorage или устанавливаем 0
    let views = parseInt(localStorage.getItem("videoViews")) || 15687;
    let downloads = parseInt(localStorage.getItem("videoDownloads")) || 1073;
    let hasPlayed = false;

    // Показываем сохранённые значения
    viewCountElem.textContent = `Просмотров: ${views}`;
    downloadCountElem.textContent = `Скачиваний: ${downloads}`;

    // Счётчик просмотров (срабатывает один раз при первом воспроизведении)
    video.addEventListener("play", () => {
        if (!hasPlayed) {
            views++;
            hasPlayed = true;
            localStorage.setItem("videoViews", views);
            viewCountElem.textContent = `Просмотров: ${views}`;
        }
    });

    // Счётчик скачиваний
    downloadBtn.addEventListener("click", () => {
        downloads++;
        localStorage.setItem("videoDownloads", downloads);
        downloadCountElem.textContent = `Скачиваний: ${downloads}`;

        // Старт загрузки
        const link = document.createElement("a");
        link.href = video.querySelector("source").src;
        link.download = "exoplanet.mp4";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
});

document.addEventListener("DOMContentLoaded", function () {
  
    const form = document.getElementById("commentForm");
    const textarea = document.getElementById("userComment");
    const display = document.getElementById("commentsDisplay");
  
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const userInput = textarea.value;
  
      // Безопасный вывод
      const commentEl = document.createElement("p");
      commentEl.textContent = userInput; // защита от XSS
      display.appendChild(commentEl);
  
      textarea.value = "";
    });
  });
  
document.getElementById('search-toggle').addEventListener('click', function () {
    const input = document.getElementById('search-input');
    input.style.display = input.style.display === 'none' ? 'inline-block' : 'none';
    if (input.style.display === 'inline-block') {
        input.focus();
    }
});

document.getElementById('theme-toggle').addEventListener('click', function () {
    document.body.classList.toggle('dark-theme');

    const isDark = document.body.classList.contains('dark-theme');
    
    // Логотип
    const logo = document.getElementById('main-logo');
    logo.src = isDark ? 'logok-dark.jpg' : 'logok.jpg';

    // Иконки поиска и смены темы
    document.getElementById('icon-theme').src = isDark ? 'images/icons/theme-dark.png' : 'images/icons/theme.png';
    document.getElementById('icon-search').src = isDark ? 'images/icons/search-dark.png' : 'images/icons/search.png';

    // Иконки соцсетей
    document.getElementById('icon-telegram').src = isDark ? 'images/icons/telegram-dark.png' : 'images/icons/telegram.png';
    document.getElementById('icon-instagram').src = isDark ? 'images/icons/instagram-dark.png' : 'images/icons/instagram.png';
    document.getElementById('icon-facebook').src = isDark ? 'images/icons/facebook-dark.png' : 'images/icons/facebook.png';
});