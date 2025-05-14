// Мягкая анимация смены цвета заголовка
const colors = ['#ff6b6b', '#ffa502', '#1e90ff', '#2ed573'];
let i = 0;
setInterval(() => {
  document.getElementById('error-code').style.color = colors[i % colors.length];
  i++;
}, 700);

// Переход на главную через 10 секунд
setTimeout(() => {
  window.location.href = 'index.html';
}, 10000);

// Обработчик кликов по изображениям соцсетей
document.querySelectorAll('.social-link').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();  // Отменяем стандартное действие ссылки
        const errorPage = this.getAttribute('data-error-page'); // Получаем ссылку на страницу с ошибкой
        window.location.replace(errorPage);  // Используем window.location.replace для правильного редиректа
    });
});
