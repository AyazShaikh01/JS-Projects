function addTask(){
    let taskInput = document.querySelector('#taskInput');
    let taskList = document.querySelector('#taskList');

    if(taskInput.value !== ""){
        let li = document.createElement("li");
        li.textContent = taskInput.value;
        taskList.appendChild(li);
        taskInput.value = "";

        let deleteButton = document.createElement("span");
        deleteButton.textContent = "❌";
        deleteButton.className = "delete";
        deleteButton.onclick = function() {
            taskList.removeChild(li);
        }

        li.appendChild(deleteButton);
    } 
    else {
        alert("please enter a task!!");
    }
}

