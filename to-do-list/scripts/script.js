const todoList = JSON.parse(localStorage.getItem('todoList')) ||  [{
    name:'Washing Cloth',
    dueDate:'2026-12-10'
    }];

renderTodoList();

function renderTodoList(){

    let todoListHTML='';

    todoList.forEach((todoObject,index) => {
        // const name = todoObject.name;
        // const dueDate = todoObject.dueDate;
        const { name, dueDate } = todoObject;

        const html =
        `<div>${name}</div>
        <div>${dueDate}</div>
        <button class='delete-button js-delete-button'>
        Delete
        </button>`;
         todoListHTML += html;
    });

    document.querySelector('.js-todo-list').innerHTML = todoListHTML;
// To select all the buttons
    document.querySelectorAll('.js-delete-button')
        .forEach((deleteButton, index) => {
            deleteButton.addEventListener('click', () => {
                todoList.splice(index, 1);
                localStorage.setItem('todoList', JSON.stringify(todoList));
                renderTodoList();
            });
        });
}

document.querySelector('.js-add-todo')
    .addEventListener('click',()=>{
        addToDo();
    });

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
