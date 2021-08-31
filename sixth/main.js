var form = document.getElementById('form');
var todoUL = document.getElementById('todos');
var input = document.getElementById('todo')


form.addEventListener('submit', (e) => {
    e.preventDefault();
    addTodo();
});

function addTodo() {
    let todoValue = input.value;
    if(todoValue){
        let liElem = document.createElement('li');
        liElem.innerText = todoValue;
        liElem.addEventListener('click', (e) => {
            liElem.classList.add('completed');
        });

        liElem.addEventListener('contextmenu', (e) => {
            e.preventDefault();
            liElem.remove();
        });

        todoUL.appendChild(liElem);
    }
    input.value = '';
}
