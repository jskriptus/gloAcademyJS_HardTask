let body = document.querySelector('body'),
    div = document.createElement('div'),
    hex = document.createElement('h1'),
    br = document.createElement('div'),
    btn = document.createElement('button');

body.insertAdjacentElement('afterbegin', div);
div.insertAdjacentElement('afterbegin', hex);
hex.insertAdjacentElement('afterend', br);
div.insertAdjacentElement('beforeend', btn);

body.style.backgroundColor = '#8274b3';

br.style.flexBasis = '100%';
br.style.height = '0';

div.style.display = 'flex';
div.style.flexWrap = 'wrap';
div.style.justifyContent = 'center';

hex.textContent = '#8274b3';
hex.style.color = '#fff';
hex.style.fontSize = '50px';

btn.style.fontSize = '20px';
btn.style.padding = '20px';
btn.style.color = '#8274b3';
btn.style.outline = 'none';
btn.textContent = 'Изменить Цвет';
btn.style.borderRadius = '5px';

const setBackground = () => {
    let r = Math.floor(Math.random() * (256)),
        g = Math.floor(Math.random() * (256)),
        b = Math.floor(Math.random() * (256)),
        color = '#' + r.toString(16) + g.toString(16) + b.toString(16);

    body.style.backgroundColor = color;
    hex.textContent = color;
    btn.style.color = color;
}

btn.addEventListener('click', setBackground);