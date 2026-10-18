// количество студентов
let studentsCount = 10;

// найди HTML-элемент
const paragraph = document.querySelector("#students-count");

//запись значение в html-элемент
paragraph.textContent = `Количество студентов:${studentsCount}`;

studentsCount = 11

//вручную обновляю html-element
paragraph.textContent = `Количество студентов:${studentsCount}`;//11

/*
Список из 100 студентов
форма добавления студента
Поиск по имени
Фильтр по учебной группе
Статистика
Кнопки редактирования и удаления
...
 */

//================================================
