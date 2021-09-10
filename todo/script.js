const form = document.getElementById('form');
const input = document.getElementById('input');
const todoUL = document.getElementById('todos');

const todos = []


form.addEventListener('submit', (e) => {
    e.preventDefault();
    addTodo();
});


function addTodo() {
    let todoText = input.value;

    if (todoText) {
        const todoEl = document.createElement('li');

        todoEl.innerText = todoText;

        todoEl.addEventListener('click', () => {
            todoEl.classList.toggle('completed');
            
        })

        todoEl.addEventListener('contextmenu', (e) => {
            e.preventDefault();

            todoEl.remove();
        });

        todoUL.appendChild(todoEl);

        input.value = '';
    }
}