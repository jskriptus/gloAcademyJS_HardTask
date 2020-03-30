'use stict';

// Переменная lang может принимать 2 значения: 'ru' 'en'.
const lang = 'en';

// Написать условия при котором в зависимости от значения lang будут выводится дни недели на русском или английском языке. 
// a) через if
if (lang === 'ru') {
    console.log('Понедельник');
    console.log('Вторник');
    console.log('Среда');
    console.log('Четверг');
    console.log('Пятница');
    console.log('Суббота');
    console.log('Воскресение');
} else {
    console.log('Monday');
    console.log('Tuesday');
    console.log('Wednesday');
    console.log('Thursday');
    console.log('Friday');
    console.log('Saturday');
    console.log('Sunday');
}

// b) через switch-case 
switch (lang) {
    case 'ru' :
        console.log('Понедельник');
        console.log('Вторник');
        console.log('Среда');
        console.log('Четверг');
        console.log('Пятница');
        console.log('Суббота');
        console.log('Воскресение');
        break;
    case 'en' :
        console.log('Monday');
        console.log('Tuesday');
        console.log('Wednesday');
        console.log('Thursday');
        console.log('Friday');
        console.log('Saturday');
        console.log('Sunday');
        break;
}

// c) через многомерный массив без if и switch
const mas = new Map( [
    [
        'ru',
        ['Понедельник, Вторник, Среда, Четверг, Пятница Суббота, Воскресение']
    ],
    [
        'en',
        ['Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday']
    ]
]);

console.log(mas.get(lang).join());

/* 
    У нас есть переменная namePerson. 
    Если значение этой переменной “Артем” то вывести в консоль “директор”, 
    если значение “Максим” то вывести в консоль “преподаватель”, 
    с любым другим значением вывести в консоль “студент”

	Решить задачу с помощью нескольких тернарных операторов, без использования if или switch
*/

const namePerson = 'Артем';
namePerson === 'Артем' ? console.log('Директор') : namePerson === 'Максим' ? console.log('Преподаватель') : console.log('Студент');