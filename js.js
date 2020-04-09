/*
! Выведите на страницу текущую дату и время в формате: 
* 'Сегодня Вторник, 4 февраля 2020 года, 21 час 5 минут 33 секунды'  (1 БАЛЛ)
*/

// Получаем body элемент со страницы
let body = document.querySelector('body');

// Создаем div элемент на странице
let clock = document.createElement('div');

// Получаем день недели словами
let getWeekDay = new Date().toLocaleString('ru', {
    weekday: 'long',
});

// Получаем месяц словами
let getMonthDay = new Date().toLocaleString('ru', {
    month: 'long',
});

// Функция правильно склоняет час в зависимости от того какой сейчас час
const getCorrectHour = (hour) => {
    if ((hour >= 2 && hour <= 4) || (hour >= 22 && hour <= 24)) {
        return 'часа';
    } else if (hour === 1 || hour === 21) {
        return 'час';
    } else if (hour >= 5 && hour <= 20) {
        return 'часов';
    }
};

// Функция возвращает строку вида 'Сегодня Вторник, 4 февраля 2020 года, 21 час 5 минут 33 секунды'
const todayDateOne = () => {
    let currentDate = new Date(),
        currentWeekdayInWords = getWeekDay, // Храним текущий день недели словами
        currentDay = currentDate.getDate(), // Храним текущий день месяца цифрами
        currentMonthInWords = getMonthDay, // Храним текущий месяц словами
        currentYear = currentDate.getFullYear(), // Храним текущий год
        currentHour = currentDate.getHours(), // Храним текущий час
        currentMinutes = currentDate.getMinutes(), // Храним текущие минуты
        currentSeconds = currentDate.getSeconds(); // Храним текущие секунды

    return `Сегодня ${currentWeekdayInWords}, ${currentDay} ${currentMonthInWords} ${currentYear} года, ${currentHour} ${getCorrectHour(currentHour)} ${currentMinutes} минут ${currentSeconds} секунды`;
};

// Выводим каждую секунду актуальное время
setInterval(() => {
    body.prepend(clock);
    clock.textContent = todayDateOne();
}, 1000);





/*
! Выведите на страницу текущую дату и время в формате: 
* '04.02.2020 - 21:05:33' (1 БАЛЛ)
*/

// Первый способ

// Функция добавляет ноль перед числом которое состоит из 1 цифры
const addZero = (num) => {
    if (num >= 0 && num <= 9) {
        return '0' + num;
    } else {
        return num;
    }
};

// Функция возвращает строку вида '04.02.2020 - 21:05:33'
const todayDateTwo = () => {
    let currentDate = new Date(),
        currentDay = currentDate.getDate(), // Храним текущий день месяца цифрами
        currentMonth = currentDate.getMonth(), // Храним текущий месяц цифрами
        currentYear = currentDate.getFullYear(), // Храним текущий год
        currentHour = currentDate.getHours(), // Храним текущий час
        currentMinutes = currentDate.getMinutes(), // Храним текущие минуты
        currentSeconds = currentDate.getSeconds(); // Храним текущие секунды

    return `${addZero(currentDay)}.${addZero(currentMonth + 1)}.${currentYear} - ${addZero(currentHour)}:${addZero(currentMinutes)}:${addZero(currentSeconds)}`;
};

// Создаем клон элемента
let clockTwo = clock.cloneNode(false);

// Выводим каждую секунду актуальное время
setInterval(() => {
    body.prepend(clockTwo);
    clockTwo.textContent = todayDateTwo();
}, 1000);

// Второй способ

let todayDateThree = new Date().toLocaleString('ru', {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
});

let todayDateThreeClock = new Date().toLocaleString('ru', {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
});

console.log(todayDateThree + ' - ' + todayDateThreeClock);