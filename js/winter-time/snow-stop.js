const snowContainer = document.querySelector('.snow-container');

function createSnowflakes(num) {
 for (let i = 0; i < num; i++) {
 const snowflake = document.createElement('div');
 snowflake.classList.add('snowflake');

 // Встановити випадковий розмір
 const size = Math.random() * 20 + 10; // розмір від 10 пікселів до 30 пікселів
 snowflake.style.fontSize = `${size}px`;

 // Встановити випадкову позицію
 const leftPosition = Math.random() * 100; // випадкове горизонтальне положення
 snowflake.style.left = `${leftPosition}vw`;

 // Встановити випадкову тривалість анімації
 const speed = Math.random() * 10 + 5; // швидкість від 3 до 8 секунд
 snowflake.style.animationDuration = `${speed}s`;

 // Встановити випадковий горизонтальний рух
 const horizontalMovement = (Math.random() - 0.5) * 50; // випадковий горизонтальний рух
 snowflake.style.transform = `translateX(${horizontalMovement}px)`;

 // Встановіть символ сніжинки
 snowflake.innerHTML = '&#10052;';

 // Встановіть випадковий колір для сніжинки
 snowflake.style.color = `hsl(${Math.random() * 360}, 100%, 100%)`; // Випадковий колір у діапазоні HSL

 snowContainer.appendChild(snowflake);

 // Видаліть сніжинки після того, як вони впадуть
 snowflake.addEventListener('animationend', () => {
 snowflake.remove();
 });
 }
}

// Встановити кількість снігу
const amountSnow = 20; // кількість снігу

// Створення снігу
createSnowflakes(amountSnow);

// Щомиті створюйте новий сніг
setInterval(() => {
createSnowflakes(1);
}, 2000);