const input = document.querySelector('input');
const button = document.querySelector('button');
const list = document.querySelector('.list');

let newListItem = () => {
    if(input.value !== ""){
    let newLi = document.createElement('li');
    let newButton = document.createElement('button');
    let newSpan = document.createElement('span');
    newSpan.textContent = input.value;
    input.value = '';
    newButton.textContent = '❌';
    newLi.appendChild(newSpan);
    newLi.appendChild(newButton);
    list.appendChild(newLi);
    // console.log(input.value);
    newButton.addEventListener('click', () =>{ 
        newLi.remove();
        input.focus();
    })}
}


button.addEventListener('click', newListItem);
input.addEventListener('keypress', (pressed)  =>{
    // console.log(pressed.key === 'Enter')
    if (pressed.key === 'Enter'){
        newListItem();
    }
})

