
var i = 0;
const divItem = document.getElementById('object');
const textItem = document.querySelector('#text');
const textPseudo = window.getComputedStyle(textItem, '::before');

function backgroundChange(div)
{
    if(i%2 == 0)
    return div.style.width='100%';
    else
    return div.style.width='0';
}

function textChange(text)
{
    if(i%2 == 0)
    return text.style.setProperty('--width', '100%');
    else
    return text.style.setProperty('--width', '0');
}

textItem.addEventListener('click', e => {
    backgroundChange(divItem);
    textChange(textItem);
    ++i;

})

