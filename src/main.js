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

    const newTodo = {
        text: "Profit",
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

        const textTD = document.querySelector('.text');
        const textData = document.createElement('li');
        textData.innerText = todoitem[i].text;
        textTD.appendChild(textData);
    }
}

function clearList(){
    event.preventDefault();
    removeAllChildrenOfOl();
}

function removeAllChildrenOfOl() {
    const ol = document.querySelector('.text');
    while (ol.hasChildNodes()) {
        ol.removeChild(ol.firstChild);
    }
}