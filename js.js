/*
! Создать массив week и записать в него дни недели в виде строк
* Вывести на экран все дни недели
* Каждый из них с новой строчки
* Выходные дни - курсивом
* Текущий день - жирным шрифтом(использовать объект даты)
*/

let days = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресение'];
let todayDate = new Date();
let todayDay = todayDate.getDay();

for (let i = 0; i < days.length; i++) {
    if (i === 5 || i === 6) {
        days[i] = days[i].italics();
    } 
    if (todayDay === 0 && i === 6) {
        days[i] = days[i].bold();
    } 
    if (todayDay === i + 1) {
        days[i] = days[i].bold();
    }
}

document.write(days.join('<br />'));