const catalogs = {
    catalog1: '/source/pdf/instructions-sebn-pdf/instructions-source/PRE-PROD-KOMAX', // Шлях до каталогу 1
    catalog2: '/source/pdf/instructions-sebn-pdf/instructions-source/AUX-TOOLS' // Шлях до каталогу 2
};

function searchPDF(catalogKey) {
    // Отримуємо текст із трьох полів форми
    const input1 = document.getElementById('field1').value.trim();
    const input2 = document.getElementById('field2').value.trim();
    const input3 = document.getElementById('field3').value.trim();

    // Об'єднуємо текст без пробілів
    const combinedText = input1 + input2 + input3;
    const pdfContainer = document.getElementById('pdf-container');

    if (!combinedText) {
        alert("Будь ласка, введіть текст у всі поля.");
        return;
    }

    const fileName = combinedText + '.pdf'; // Формуємо назву файлу
    const filePath = `${catalogs[catalogKey]}/${fileName}`;

    // Очищення контейнера PDF перед новим пошуком
    pdfContainer.innerHTML = '';

    // Перевірка наявності файлу
    fetch(filePath)
        .then(response => {
            if (response.ok) {
                // Відкриваємо PDF у вбудованому фреймі
                const embed = document.createElement('embed');
                embed.src = filePath;
                embed.type = 'application/pdf';
                embed.width = '100%';
                embed.height = '600px';
                pdfContainer.appendChild(embed);
            } else {
                alert("Файл не знайдено у каталозі: " + catalogs[catalogKey]);
            }
        })
        .catch(error => {
            console.error('Помилка при пошуку файлу:', error);
            alert("Файл не знайдено.");
        });
}

// Додаємо функціонал перемикання між полями та кнопкою
document.getElementById('field1').addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
        e.preventDefault(); // Запобігаємо стандартній дії
        document.getElementById('field2').focus(); // Перемикаємо фокус на друге поле
    }
});

document.getElementById('field2').addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
        e.preventDefault(); // Запобігаємо стандартній дії
        document.getElementById('field3').focus(); // Перемикаємо фокус на третє поле
    }
});

document.getElementById('field3').addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
        e.preventDefault(); // Запобігаємо стандартній дії
        document.querySelector('.button-search-form').focus(); // Перемикаємо фокус на кнопку пошуку
    }
});
