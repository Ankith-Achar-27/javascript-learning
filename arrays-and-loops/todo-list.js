const list = ['wash clothes','dishes'];
handleNewTask();

function handleNewTask(){
    let html='';

    list.forEach(task => {
        html += `<p>${task}</p>`;
    });
    document.querySelector('.showTask').innerHTML = html;
}

function addList(){
    const inputElement = document.querySelector('.js-input-name');
    const task = inputElement.value;
    list.push(task);
    console.log(list);
    inputElement.value='';
    handleNewTask();
}

function handleKey(event){
    if(event.key === 'Enter'){
        addList();
    }
}
