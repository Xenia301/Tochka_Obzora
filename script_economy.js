document.addEventListener("DOMContentLoaded", function () {
    const chart1Canvas = document.getElementById("chart1");
    const chart2Canvas = document.getElementById("chart2");
    const chart3Canvas = document.getElementById("chart3");

    const article1 = document.getElementById("article1");
    const article2 = document.getElementById("article2");
    const article3 = document.getElementById("article3");

    let chart1 = null;
    let chart2 = null;
    let chart3 = null;

    function getChartConfigs(isDark) {
        const textColor = isDark ? '#fff' : '#000';
        const gridColor = isDark ? '#444' : '#ccc';

        return {
            config1: {
                type: 'bar',
                data: {
                    labels: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],
                    datasets: [
                        {
                            type: 'bar',
                            label: 'Инфляция 2024 (%)',
                            data: [4.1, 4.3, 4.0, 3.8, 3.7, 3.9, 4.2, 4.0, 3.9, 3.8, 3.6, 3.5],
                            backgroundColor: 'rgba(255, 99, 132, 0.5)',
                            borderColor: 'rgba(255, 99, 132, 1)',
                            borderWidth: 1
                        },
                        {
                            type: 'line',
                            label: 'Инфляция 2025 (%)',
                            data: [3.5, 3.6, 3.4, 3.3, 3.2, 3.1, 3.0, 3.1, 3.3, 3.4, 3.5, 3.6],
                            borderColor: 'rgba(54, 162, 235, 1)',
                            backgroundColor: 'rgba(54, 162, 235, 0.2)',
                            tension: 0.4,
                            fill: false
                        }
                    ]
                },
                options: {
                    responsive: true,
                    plugins: {
                        title: {
                            display: true,
                            text: 'Инфляция по месяцам — 2024 и 2025',
                            color: textColor
                        },
                        legend: {
                            labels: {
                                color: textColor
                            }
                        }
                    },
                    scales: {
                        y: {
                            beginAtZero: false,
                            ticks: { color: textColor },
                            grid: { color: gridColor }
                        },
                        x: {
                            ticks: { color: textColor },
                            grid: { color: gridColor }
                        }
                    }
                }
            },

            config2: {
                type: 'bar',
                data: {
                    labels: ['Квартал 1', 'Квартал 2', 'Квартал 3', 'Квартал 4'],
                    datasets: [{
                        label: 'Средняя цена на жильё (млн долл.)',
                        data: [7.2, 7.5, 8.1, 8.4],
                        backgroundColor: 'rgba(255, 159, 64, 0.6)'
                    }]
                },
                options: {
                    responsive: true,
                    plugins: {
                        title: {
                            display: true,
                            text: 'Рынок недвижимости — 2024',
                            color: textColor
                        },
                        legend: {
                            labels: {
                                color: textColor
                            }
                        }
                    },
                    scales: {
                        y: {
                            beginAtZero: false,
                            ticks: { color: textColor },
                            grid: { color: gridColor }
                        },
                        x: {
                            ticks: { color: textColor },
                            grid: { color: gridColor }
                        }
                    }
                }
            },

            config3: {
                type: 'line',
                data: {
                    labels: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май'],
                    datasets: [{
                        label: 'Доходность инвестиций (%)',
                        data: [3.5, 4.2, 2.8, 5.0, 4.7],
                        borderColor: 'rgba(75, 192, 192, 1)',
                        backgroundColor: 'rgba(75, 192, 192, 0.2)',
                        tension: 0.3,
                        fill: true
                    }]
                },
                options: {
                    responsive: true,
                    plugins: {
                        title: {
                            display: true,
                            text: 'Динамика доходности инвестиций — 2024',
                            color: textColor
                        },
                        legend: {
                            labels: {
                                color: textColor
                            }
                        }
                    },
                    scales: {
                        y: {
                            beginAtZero: true,
                            ticks: { color: textColor },
                            grid: { color: gridColor }
                        },
                        x: {
                            ticks: { color: textColor },
                            grid: { color: gridColor }
                        }
                    }
                }
            }
        };
    }

    function toggleChart(chartNumber) {
        const isDark = document.body.classList.contains("dark-theme");
        const configs = getChartConfigs(isDark);

        let canvas, article, chartRef, config;

        switch (chartNumber) {
            case 1:
                canvas = chart1Canvas;
                article = article1;
                chartRef = chart1;
                config = configs.config1;
                break;
            case 2:
                canvas = chart2Canvas;
                article = article2;
                chartRef = chart2;
                config = configs.config2;
                break;
            case 3:
                canvas = chart3Canvas;
                article = article3;
                chartRef = chart3;
                config = configs.config3;
                break;
        }

        const isVisible = canvas.style.display === "block";

        if (isVisible) {
            canvas.style.display = "none";
            article.style.display = "none";
            if (chartRef) {
                chartRef.destroy();
                if (chartNumber === 1) chart1 = null;
                if (chartNumber === 2) chart2 = null;
                if (chartNumber === 3) chart3 = null;
            }
        } else {
            canvas.style.display = "block";
            article.style.display = "block";
            const newChart = new Chart(canvas, config);
            if (chartNumber === 1) chart1 = newChart;
            if (chartNumber === 2) chart2 = newChart;
            if (chartNumber === 3) chart3 = newChart;
        }
    }

    // Назначение обработчиков кнопок
    document.getElementById("changeTextButton1").addEventListener("click", () => toggleChart(1));
    document.getElementById("changeTextButton2").addEventListener("click", () => toggleChart(2));
    document.getElementById("changeTextButton3").addEventListener("click", () => toggleChart(3));

    // Показываем первый график при загрузке
    const { config1 } = getChartConfigs(document.body.classList.contains("dark-theme"));
    chart1Canvas.style.display = "block";
    chart1 = new Chart(chart1Canvas, config1);
    article1.style.display = "block";

    // Переключение темы
    document.getElementById('theme-toggle').addEventListener('click', function () {
        document.body.classList.toggle('dark-theme');
        const isDark = document.body.classList.contains('dark-theme');
        localStorage.setItem("theme", isDark ? "dark" : "light");

        // Обновление иконок
        document.getElementById('main-logo').src = isDark ? 'logok_e_dark.jpg' : 'logok_e.jpg';
        document.getElementById('icon-theme').src = isDark ? 'images/icons/theme-dark.png' : 'images/icons/theme.png';
        document.getElementById('icon-search').src = isDark ? 'images/icons/search-dark.png' : 'images/icons/search.png';
        document.getElementById('icon-telegram').src = isDark ? 'images/icons/telegram-dark.png' : 'images/icons/telegram.png';
        document.getElementById('icon-instagram').src = isDark ? 'images/icons/instagram-dark.png' : 'images/icons/instagram.png';
        document.getElementById('icon-facebook').src = isDark ? 'images/icons/facebook-dark.png' : 'images/icons/facebook.png';

        // Перерисовка активных графиков
        const configs = getChartConfigs(isDark);
        if (chart1) {
            chart1.destroy();
            chart1 = new Chart(chart1Canvas, configs.config1);
        }
        if (chart2) {
            chart2.destroy();
            chart2 = new Chart(chart2Canvas, configs.config2);
        }
        if (chart3) {
            chart3.destroy();
            chart3 = new Chart(chart3Canvas, configs.config3);
        }
    });
});
