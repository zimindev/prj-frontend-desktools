const catalogs = {
    catalog1: '/source/pdf/instructions-sebn-pdf/instructions-source/PRE-PRODUCTION/Pres_5_CHOPPC0537',  //* вкажіть реальний шлях до каталогу 1
    catalog2: '/source/pdf/instructions-sebn-pdf/instructions-source/AUX-TOOLS'   //* вкажіть реальний шлях до каталогу 2
};

function searchPDF(catalogKey) {
    const input = document.getElementById('search-input').value;
    const pdfContainer = document.getElementById('pdf-container');
    
    if (!input) {
        alert("Будь ласка, введіть назву файлу.");
        return;
    }

    const fileName = input + '.pdf';
    const filePath = `${catalogs[catalogKey]}/${fileName}`;

    //* Очистка контейнера PDF перед новим пошуком
    pdfContainer.innerHTML = '';

    //* Перевірка наявності файлу (для демонстрації використовується умовний оператор)
    fetch(filePath)
        .then(response => {
            if (response.ok) {
                //* Відкриваємо PDF у вбудованому фреймі
                const embed = document.createElement('embed');
                embed.src = filePath;

                pdfContainer.appendChild(embed);
            } else {
                alert("Файл не знайдено в " + catalogs[catalogKey]);
            }
        })
        .catch(error => {
            console.error('Помилка при пошуку файлу:', error);
            alert("Файл не знайдений.");
        });
}
