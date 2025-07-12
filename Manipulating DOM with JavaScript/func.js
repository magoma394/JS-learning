const input = document.getElementById('todo-input');
const addbtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');

addbtn.addEventListener('click', addTask);

function addTask() {
    const task = input.value.trim();

    if (task !== ''){
        const li = document.createElement('li');
        li.textContent = task;
        li.addEventListener('click', function() {
            todoList.removeChild(li);
        });
        todoList.appendChild(li);
        input.value = '';
    }
}