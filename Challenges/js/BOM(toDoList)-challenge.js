// BOOM Challenge (To Do List)
let container = document.getElementById("container");
let form = document.forms[0];
let taskTitleInput = document.getElementById("task-title");
let addBtn = document.querySelector("input[class='add']");
let tasksView = document.getElementById("tasks");
let createdTask = [];

container.style.cssText = `
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 15px;
  margin-top: 50px;
`

form.style.cssText = `
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 10px;
  background-color: #eee;
  padding: 20px;
  border-radius: 7px;
  width: 500px;
`;

taskTitleInput.style.cssText = `
  flex: 1;
  height: 40px;
  padding-right: 10px;
  padding-left: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  outline: none;
`;

addBtn.style.cssText = ` 
  background-color: teal;
  color: #fff;
  height: 40px;
  padding-right: 5px;
  padding-left: 5px;
  border: 1px solid teal;
  border-radius: 5px;
  cursor: pointer;
`;

tasksView.style.cssText = `
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 15px;
  background-color: #eee;
  width: 500px;
  padding: 20px;
  border-radius: 7px;
`;


if (localStorage.getItem("tasks")) {
  createdTask = JSON.parse(localStorage.getItem("tasks"));
  showTasks();
}

addBtn.addEventListener("click", function (e) {
  e.preventDefault();
  if(taskTitleInput.value.trim() !== "") {
    createTask(taskTitleInput.value.trim());
    taskTitleInput.value = "";
  }
});

function createTask(taskName) {
  let theTask = {
    id: (Math.random() * 10000000000).toFixed(),
    title: taskName
  }
  createdTask.push(theTask);
  localStorageUpdate();
  showTasks();
}

function showTasks() {
  tasksView.innerHTML = "";

  for(ele of createdTask) {
    let taskDiv = document.createElement("div");
    let deleteBtn = document.createElement("button");
    let taskTitleTextNode = document.createTextNode(ele.title);

    deleteBtn.className = "delete";
    deleteBtn.textContent = "delete";

    taskDiv.id = ele.id;
    taskDiv.title = ele.title;
    taskDiv.className = "task";

    taskDiv.appendChild(taskTitleTextNode);
    taskDiv.appendChild(deleteBtn);
    tasksView.prepend(taskDiv);

    taskDiv.style.cssText = `
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: #fff;
      width: 100%;
      padding: 10px;
      border-radius: 5px;
    `;

    deleteBtn.style.cssText = `
      background-color: teal;
      color: #fff;
      font-weight: bold;
      padding: 3px 5px;
      border-radius: 4px;
      border: none;
      outline: none;
      cursor: pointer;
    `;
  }
}

tasksView.addEventListener("click" , function (e) {
  if(e.target.className === "delete") {
    deletTask(e.target.parentElement.id);
    e.target.parentElement.remove();
  }
});

function deletTask (taskId) {
  createdTask = createdTask.filter( function (ele) {
    return ele.id !== taskId;
  })
  localStorageUpdate();
};

function localStorageUpdate() {
  localStorage.setItem("tasks", JSON.stringify(createdTask));
}
