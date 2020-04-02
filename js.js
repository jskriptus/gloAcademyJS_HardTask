const arr = ['435234234', '43452343', '623742341', '26342345', '7353123123', '34143134132', '123413453'];
arr.forEach((item) => {
    if (item[0] === '2' || item[0] === '4') {
        console.log(item);
    }
});

const isNatural = (number) => {
    if (number < 2) {
        return false;
    }
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
};

for (let i = 0; i < 100; i++) {
    if (isNatural(i)) {
        console.log(`Делители ${i}: 1 и ${i}`);
    }
}