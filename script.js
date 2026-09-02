
document.getElementById("date").textContent = new Date().getFullYear();

const input = document.getElementById("todoInput");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("todoList");

addBtn.addEventListener("click", () => {
  if (input.value.trim() !== "") {
    const li = document.createElement("li");
    li.textContent = input.value;

    const delBtn = document.createElement("button");
    delBtn.textContent = "Delete";
    delBtn.addEventListener("click", () => li.remove());

    li.appendChild(delBtn);
    list.appendChild(li);
    input.value = "";
  }
});
