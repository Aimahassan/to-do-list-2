function addTask() {

    const taskInput = document.getElementById('inputTask').value.trim();

    
    if (taskInput === "") {
        alert("Please enter a task.");
        return;
    }

    const newTask = document.createElement('li');
    newTask.textContent = taskInput;

  
    const taskList = document.getElementById('tasklist');
    taskList.appendChild(newTask);

    document.getElementById('inputTask').value = '';

    deleteTask(newTask);
}

function deleteTask(newTask) {
   
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = "Delete";

    newTask.appendChild(deleteBtn);

    deleteBtn.onclick = function() {
        newTask.remove();
    };
}