const func = (str) => {
    if (typeof str !== 'string') {
        console.log('Не строка!');
    } else {

        str = str.trim();

        if (str.length > 30) {
            // str = str.slice(0, 30) + '...';
            // str = str.substring(0, 30) + '...';
            str = str.substr(0, 30) + '...';
            console.log(str);
        } else {
            return str;
        }
    }
};

func('      Ехал грека через реку видит грека в реке рак зомбак, рак за руку греку цап, цап царап и грека рак');