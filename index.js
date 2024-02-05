// not executing this file 
/* Follow the instructions found in the description to complete the JavaScript functionality.*/

let todoList = [{
    text: "Learn HTML"
},
{
    text: "Learn CSS"
},
{
    text: "Learn JavaScript"
}
];
let todoItemsContainer = document.getElementById("todoItemsContainer");

function createAndAppendTodo(todo) {
let todoElement = document.createElement("li");
todoElement.classList.add("todo-items-container", "d-flex", "flex-row");
todoItemsContainer.appendChild(todoElement);

let inputElement = document.createElement("input");
inputElement.type = "checkbox";
inputElement.id = "checkBoxInput";
inputElement.classList.add("checkbox-input");
todoElement.appendChild(inputElement);

let labelContainer = document.createElement("div");
labelContainer.classList.add("label-container", "d-flex", "flex-row");
todoElement.appendChild(labelContainer);

let labelElement = document.createElement("label");
labelElement.setAttribute("for", "checkBoxInput");
labelElement.classList.add("checkbox-label");
labelElement.textContent = todo.text;
labelContainer.append(labelElement);

let deleteIconContainer = document.createElement("div");
deleteIconContainer.classList.add("delete-icon-container");
labelContainer.appendChild(deleteIconContainer);

let deleteElement = document.createElement("i");
deleteElement.classList.add("far", "fa-trash-alt", "delete-icon");
deleteIconContainer.appendChild(deleteElement);
}
for (let eachTodo of todoList) {
createAndAppendTodo(eachTodo);
}