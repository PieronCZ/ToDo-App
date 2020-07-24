const addBtn = document.querySelector(".btn-add");
const input = document.querySelector(".input");
const deleteBtn = document.querySelector(".btn-delete");
const listContainer = document.querySelector(".list-container");
const container = document.querySelector(".container");

let taskArray = [];
let height = 700;
let id = 0;


// Add task to list
function addToList(e) {
  e.preventDefault();

  if (input.value.trim() === "") {
    alert("Specify the taks!");
  } else {
    const inputValue = input.value;
    const task = {
        ID: id++,
        text: inputValue
    }
    taskArray.push(task);
    console.log(taskArray);
    height = height + 65;
    container.style.height = `${height}px`;
    input.value = "";
    // const {ID, text} = task;
    refreshList();
  }
}

// Remove task from list
function removeFromList(id) {
    taskArray = taskArray.filter(element => element.ID !== id);
    height = height - 65;
    container.style.height = `${height}px`;
    refreshList();
}

// Refresh task list
function refreshList() {
    listContainer.innerHTML = '';
    taskArray.forEach(element => {
        const item = document.createElement('li');
        item.classList.add('item');
        item.classList.add(`${element.ID}`);
        item.innerHTML = `${element.text} <button onclick="removeFromList(${element.ID})" class="btn-delete">delete</button>`;
        listContainer.appendChild(item);
    });
}

// Event listeners
input.addEventListener("submit", addToList);
addBtn.addEventListener("click", addToList);




