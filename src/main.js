window.onload = init;

function init() {
    document.querySelector('#get').addEventListener('click', getTodos);
    document.querySelector('#post').addEventListener('click', postTodo);
    document.querySelector('#put').addEventListener('click', updateThirdTodo);
}

function getTodos(event) {
    event.preventDefault();

    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://localhost:3000/todos');
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onload = handleData;
    xhr.send();
}

function postTodo(event) {
    event.preventDefault();

    const todoText = document.querySelector('#new-todo').value;

    const newTodo = {
        text: todoText,
        completed: false
    };

    
    const jsonnedTodo = JSON.stringify(newTodo);
    
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://localhost:3000/todos');
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onload = handleData;
    xhr.send(jsonnedTodo);
}

function updateThirdTodo(event) {
    const updatedTodo = {
        text: '????',
        completed: true
    };
    const jsonnedTodo = JSON.stringify(updatedTodo);
    
    const xhr = new XMLHttpRequest();
    xhr.open('PUT', 'http://localhost:3000/todos/3');
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onload = handleData;
    xhr.send(jsonnedTodo);
}

function handleData(event) {
    console.log(event.target.responseText);
    const todo = JSON.parse(event.target.responseText);
    console.log(todo);
    displayTable(todo);
}

function displayTable(todoitem){

    clearList();
    
    for (let i = 0; i < todoitem.length; i++){
        // const idTD = document.querySelector('.id');
        // const idData = document.createElement('p');
        // idData.innerText = todoitem[i].id;
        // idTD.appendChild(idData);

        if (todoitem[i].completed === false){
            const textTD = document.querySelector('.text_notcomplete');
            const textData = document.createElement('p');
            textData.innerText = todoitem[i].text;
            textTD.appendChild(textData);
        }else {
            const textTD = document.querySelector('.text_complete');
            const textData = document.createElement('p');
            textData.innerText = todoitem[i].text;
            textTD.appendChild(textData); 
        }

        // textData.addEventListener('click', toggleDone);
        
    }
}

// function toggleDone(event) {
//     const li = event.target;

//     const ol = document.querySelector('.text');
//     const lis = ol.childNodes;
//     let liIndex = -1;
    
//     for(let i = 0; i < lis.length; i++) {
//         if(lis[i].innerText === li.innerText) {
//             liIndex = i;
//         }
//     }

//     if(todos[liIndex].isDone) {
//         li.style.textDecoration = '';
//     } else {
//         li.style.textDecoration = 'line-through';
//     }

//     todos[liIndex].isDone = !todos[liIndex].isDone;
// }

function clearList(){
    event.preventDefault();
    removeAllChildrenOfOl();
}

function removeAllChildrenOfOl() {
    const ol = document.querySelector('.text_notcomplete');
    while (ol.hasChildNodes()) {
        ol.removeChild(ol.firstChild);
    }

    const ol1 = document.querySelector('.text_complete');
    while (ol1.hasChildNodes()) {
        ol1.removeChild(ol1.firstChild);
    }
}

function clearAllTodos(event) {
    
    event.preventDefault();
    todos.splice(0);
    removeAllChildrenOfOl();
    
}