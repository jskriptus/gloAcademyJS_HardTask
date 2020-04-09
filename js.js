let ulList = document.querySelector('ul');
let btn = document.querySelector('button');
let input = document.querySelector('input');

btn.addEventListener(('click'), () => {
    let li = ulList.children[0].cloneNode(false);
    li.textContent = input.value;
    ulList.append(li);
    input.value = '';
});
