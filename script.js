const addBtn = document.querySelector(".btn-add");
const input = document.querySelector(".input");
const deleteBtn = document.querySelector(".btn-delete");
const listContainer = document.querySelector(".list-container");
const container = document.querySelector(".container");

const taskArray = [];
const height = 700;

// Add task to list function
function addToList(e) {
  e.preventDefault();

  if (input.value.trim() === "") {
    alert("Specify the taks!");
  } else {
    taskArray.push(input.value);
    console.log(taskArray);
    height = height + 65;
    container.style.height = `${height}px`;
    const inputValue = input.value;
    input.value = "";
    refreshList(inputValue);
  }
}

// Refresh task list
function refreshList(value) {
  const item = document.createElement("li");
  item.classList.add("item");
  item.innerHTML = `${value} <button class="btn-delete">delete</button>`;
  listContainer.appendChild(item);
}

// Add task to list
input.addEventListener("submit", addToList);
addBtn.addEventListener("click", addToList);
