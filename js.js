/*
! Выведите на страницу текущую дату и время в формате: 
* 'Сегодня Вторник, 4 февраля 2020 года, 21 час 5 минут 33 секунды'  (1 БАЛЛ)
*/

const getWeekDay = (date) => { // функция возвращает текущий день недели
    let week = ['Воскресение', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];

    return week[date.getDay()];
};

const getMonthDay = (date) => { // функция возвращает текущий месяц
    let month = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июля', 'Июня', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];

    return month[date.getMonth()];
};

const getCorrectHour = (hour) => {
    if ((hour >= 2 && hour <= 4) || (hour >= 22 && hour <= 24)) {
        return 'часа';
    } else if (hour === 1 || hour === 21) {
        return 'час';
    } else if (hour >= 5 && hour <= 20) {
        return 'часов';
    }
}

const todayDateOne = () => {
    let currentDate = new Date(),
        currentWeekdayInWords = getWeekDay(currentDate), // Храним текущий день недели словами
        currentDay = currentDate.getDate(), // Храним текущий день месяца цифрами
        currentMonthInWords = getMonthDay(currentDate), // Храним текущий месяц словами
        currentYear = currentDate.getFullYear(), // Храним текущий год
        currentHour = currentDate.getHours(), // Храним текущий час
        currentMinutes = currentDate.getMinutes(), // Храним текущие минуты
        currentSeconds = currentDate.getSeconds(); // Храним текущие секунды

    return `Сегодня ${currentWeekdayInWords}, ${currentDay} ${currentMonthInWords} ${currentYear} года, ${currentHour} ${getCorrectHour(currentHour)} ${currentMinutes} минут ${currentSeconds} секунды`;
}

setInterval(() => {
    console.log(todayDateOne());
}, 1000);





/*
! Выведите на страницу текущую дату и время в формате: 
* '04.02.2020 - 21:05:33' (1 БАЛЛ)
*/

// Первый способ

const addZero = (num) => {
    if (num >= 0 && num <= 9) {
        return '0' + num;
    } else {
        return num;
    }
};

const todayDateTwo = () => {
    let currentDate = new Date(),
        currentDay = currentDate.getDate(), // Храним текущий день месяца цифрами
        currentMonth = currentDate.getMonth(), // Храним текущий месяц цифрами
        currentYear = currentDate.getFullYear(), // Храним текущий год
        currentHour = currentDate.getHours(), // Храним текущий час
        currentMinutes = currentDate.getMinutes(), // Храним текущие минуты
        currentSeconds = currentDate.getSeconds(); // Храним текущие секунды

    return `${addZero(currentDay)}.${addZero(currentMonth + 1)}.${currentYear} - ${addZero(currentHour)}:${addZero(currentMinutes)}:${addZero(currentSeconds)}`;
}

setInterval(() => {
    console.log(todayDateTwo());
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