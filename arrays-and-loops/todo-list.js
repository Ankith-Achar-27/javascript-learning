const todoList = JSON.parse(localStorage.getItem('todoList')) ||  [{
    name:'Washing Cloth',
    dueDate:'2026-12-10'
    }];

renderTodoList();

function renderTodoList(){

    let todoListHTML='';

    for(let i=0;i<todoList.length;i++){
        const todoObject = todoList[i];
        // const name = todoObject.name;
        // const dueDate = todoObject.dueDate;
        const { name, dueDate } = todoObject;

        const html =
        `<div>${name}</div>
        <div>${dueDate}</div>
        <button class='delete-button' onclick="todoList.splice(${i},1);
        renderTodoList();
        localStorage.setItem('todoList', JSON.stringify(todoList));">
        Delete
        </button>`;
         todoListHTML += html;
    }
    document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}

function addToDo(){
    const inputElement = document.querySelector('.js-input-name');
    const name = inputElement.value;
    const dateinputElement = document.querySelector('.js-due-date-input');
    const dueDate = dateinputElement.value;
    todoList.push({
        //name:name,
        //dueDate:dueDate
        name,
        dueDate
    });
    localStorage.setItem('todoList', JSON.stringify(todoList));
    inputElement.value='';
    renderTodoList();
}
