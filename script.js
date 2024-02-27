/* Новые элементы должны добавляться в список по нажатию на Enter */
const sendInput = document.querySelector('#input');
const conteiner = document.querySelector('.items');

sendInput.addEventListener('keydown', function(){
    const text = sendInput.value;

    const newMessage = document.createElement('div');
    newMessage.classList.add('items');
    newMessage.textContent = text;

    if(text != ''){
        conteiner.append(newMessage);
    }
    
    sendInput.value = '';

    const elements = document.querySelectorAll('div');

    for (let elem of elements) {
      elem.addEventListener('click', function(){
        elem.classList.toggle('done');
     });
      }
    })
/* Пустые элементы не должны добавляться */

/* Если кликнуть на элемент списка, он зачеркивается */

/* Если кликнуть повторно уже на зачеркнутый, он снова становится обычным */

/* Очищать input после добавления нового элемента в список */
