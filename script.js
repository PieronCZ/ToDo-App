const addBtn = document.querySelector(".btn-add");
const input = document.querySelector(".input");
const deleteBtn = document.querySelector(".btn-delete");
const listContainer = document.querySelector(".list-container");
const container = document.querySelector(".container");

const localStorageList = JSON.parse(localStorage.getItem("taskArray"));
const localStorageHeight = JSON.parse(localStorage.getItem("height"));
const localStorageId = JSON.parse(localStorage.getItem("id"));

let taskArray =
  localStorage.getItem("taskArray") !== null ? localStorageList : [];
let height = localStorage.getItem("height") !== null ? localStorageHeight : 500;
let id = localStorage.getItem("id") !== null ? localStorageId : 0;

init();

// Add task to list
function addToList(e) {
  e.preventDefault();

  if (input.value.trim() === "") {
    alert("Specify the taks!");
  } else {
    const inputValue = input.value;
    const task = {
      ID: id++,
      text: inputValue,
    };
    taskArray.push(task);
    height = height + 65;
    container.style.height = `${height}px`;
    input.value = "";
    refreshList();
    updateLocalStorage();
  }
}

// Remove task from list
function removeFromList(id) {
  taskArray = taskArray.filter((element) => element.ID !== id);
  height = height - 65;
  container.style.height = `${height}px`;
  refreshList();
  updateLocalStorage();
}

// Refresh task list
function refreshList() {
  listContainer.innerHTML = "";
  taskArray.forEach((element) => {
    const item = document.createElement("li");
    item.classList.add("item");
    item.classList.add(`${element.ID}`);
    item.innerHTML = `${element.text} <button onclick="removeFromList(${element.ID})" class="btn-delete">delete</button>`;
    listContainer.appendChild(item);
  });
}

// Update local storage
function updateLocalStorage() {
  localStorage.setItem("taskArray", JSON.stringify(taskArray));
  localStorage.setItem("height", height);
  localStorage.setItem("id", id);
}

function init() {
  refreshList();
}

// Event listeners
input.addEventListener("submit", addToList);
addBtn.addEventListener("click", addToList);
