const num = 266219; // Создаю переменную num со значением 266219 (тип данных число)

const arr = num.toString().split(''); // Преобразую число в массив

let result = 1; // Создаю переменную в которой хранится результат

for (let i = 0; i < arr.length; i++) { // Осуществляю умножение каждого числа массива и закидываю результат в result
    result = result * Number(arr[i]);
}

console.log(result); // Вывожу в консоль произведение (умножение) цифр этого числа

result = result ** 3; // Полученный результат возвожу в степень 3, используя только 1 оператор

const twoNumbersResult = result.toString().slice(0, 2); // Создаю новую переменную в которой осуществляю преобразование числа в строку и вырезаю первые два символа

alert(Number(twoNumbersResult));  // Преобразую строку в число и вывожу на экран первые 2 цифры полученного числа