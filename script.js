document.getElementById("date").textContent = new Date().getFullYear();

const input = document.getElementById("todoInput");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("todoList");

// Load tasks from localStorage
window.addEventListener("load", () => {
  const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
  savedTasks.forEach(task => addTask(task));
});

function addTask(text) {
  const li = document.createElement("li");

  const span = document.createElement("span");
  span.className = "task-text";
  span.textContent = text;

  const delBtn = document.createElement("button");
  delBtn.className = "delete-btn";
  delBtn.textContent = "Delete";
  delBtn.addEventListener("click", () => {
    li.remove();
    saveTasks();
  });

  li.appendChild(span);
  li.appendChild(delBtn);
  list.appendChild(li);
}

function saveTasks() {
  const tasks = [];
  list.querySelectorAll(".task-text").forEach(span => {
    tasks.push(span.textContent);
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

addBtn.addEventListener("click", () => {
  if (input.value.trim() !== "") {
    addTask(input.value);
    saveTasks();
    input.value = "";
  }
});
