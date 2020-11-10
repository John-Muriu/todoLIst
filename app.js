//selector
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

//event listener
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck)

//create elements
const newItem = document.createElement("li")







//functions
function addTodo(event) {
    //prevent the form from submiting
    event.preventDefault();

    //todo div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("add");

    //create the li
    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);

    //check mark button

    const completedButton = document.createElement("button");
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);

    // /check the trashButton
    const trashButton = document.createElement("button");
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

    //append to list
    todoList.appendChild(todoDiv);

    //  clear todo input value 
    todoInput.value = "";
}

function deleteCheck(e) {
    const item = e.target;
    //   delete

    if (item.classList[0] === "trash-btn") {
        todoInput.remove();
    }
}