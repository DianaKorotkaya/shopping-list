/* Новые элементы должны добавляться в список по нажатию на Enter */
const sendInput = document.querySelector('#input');
const conteiner = document.querySelector('.items');

sendInput.addEventListener('keydown', function(event){
    const text = sendInput.value;

    if (event.key == 'Enter'){
    const newMessage = document.createElement('div');
    newMessage.classList.add('items');
    newMessage.textContent = text;
     
    newMessage.addEventListener('click', function(){
      newMessage.classList.toggle('done');
     });
      
   
    if(text != ''){
        conteiner.append(newMessage);
    }
    
    sendInput.value = '';
    }
    })
  
/* Пустые элементы не должны добавляться */

/* Если кликнуть на элемент списка, он зачеркивается */

/* Если кликнуть повторно уже на зачеркнутый, он снова становится обычным */

/* Очищать input после добавления нового элемента в список */
