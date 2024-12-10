const pdfFilePath = '/source/pdf/instructions-sebn-pdf/instructions-live/Instructions_for_E-TRON.pdf';  // Вкажіть реальний шлях до PDF файлу

document.querySelector('.button-search-form-info').addEventListener('click', function() {
    const pdfContainer = document.getElementById('pdf-container');

    //* Очистка контейнера PDF перед новим виводом
    pdfContainer.innerHTML = '';

    //* Відкриваємо PDF у вбудованому фреймі
    const embed = document.createElement('embed');
    embed.src = pdfFilePath;
    pdfContainer.appendChild(embed);
});