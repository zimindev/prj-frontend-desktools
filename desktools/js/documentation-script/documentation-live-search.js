function search() {
    //* Отримуємо значення введене в поле пошуку
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('searchInput');
    filter = input.value.toUpperCase();
    ul = document.getElementsByClassName('elastic')[0]; // Отримуємо перший елемент з класом 'elastic'
    li = ul.getElementsByTagName('li');

    //* Перебираємо всі елементи списку та приховуємо ті, що не відповідають пошуковому запиту
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}