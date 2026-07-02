// Массив URL-адресов изображений 
const images = [
    'img/220x330.webp',
    'img/600x900.webp',
    'img/4522_big_883.webp',
    'img/4541_big_2829.webp',
    'img/4533_big_8753.webp'
];

// Находим элементы на странице
const sliderImage = document.getElementById('sliderImage');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const imageCounter = document.getElementById('imageCounter');

// Текущий индекс изображения (начинаем с 0)
let currentIndex = 0;

// Функция обновления изображения
function updateImage(index) {
    sliderImage.src = images[index];
    imageCounter.textContent = `${index + 1} / ${images.length}`;
}

// Обработчики событий
nextBtn.addEventListener('click', function() {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage(currentIndex);
});

prevBtn.addEventListener('click', function() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage(currentIndex);
});

// Инициализация (показываем первое изображение)
updateImage(currentIndex);
