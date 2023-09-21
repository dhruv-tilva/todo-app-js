document.addEventListener("DOMContentLoaded", init);

function init() {
    const addTaskButton = document.getElementById('addTaskButton');
    addTaskButton.addEventListener('click', () => {
        const taskInput = document.getElementById('taskInput');
        const newTask = taskInput.value.trim();
        if (newTask !== '') {
            const tasks = loadTasks();
            tasks.push(newTask);
            saveTasks(tasks);
            taskInput.value = '';
            renderTasks();
        }
    });
    document.getElementById("taskInput").addEventListener("keypress", (event) => {
        if (event.keyCode === 13) {
            const taskInput = document.getElementById('taskInput');
            const newTask = taskInput.value.trim();
            if (newTask !== '') {
                const tasks = loadTasks();
                tasks.push(newTask);
                saveTasks(tasks);
                taskInput.value = '';
                renderTasks();
            }
        }
    })
    renderTasks();
}


function loadTasks() {
    const storedTasks = localStorage.getItem('tasks');
    return storedTasks ? JSON.parse(storedTasks) : [];
}

function saveTasks(tasks) {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function renderTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';

    const tasks = loadTasks();

    tasks.forEach((task, index) => {
        const listItem = document.createElement('li');
        listItem.className = "bg-rose-700 p-2 flex justify-between items-center mb-2"

        const textSpan = document.createElement("span")
        textSpan.textContent = task;
        textSpan.className = "text-white text-lg font-semibold"

        const iconContainer = document.createElement("span")
        iconContainer.className = "flex items-center space-x-3 !no-underline"

        const removeButton = document.createElement('i');
        removeButton.className = "fa-solid fa-trash text-white text-xl !no-underline cursor-pointer opacity-70 transition-all duration-150 hover:opacity-100"
        removeButton.addEventListener('click', () => {
            tasks.splice(index, 1);
            saveTasks(tasks);
            renderTasks();
        });

        const checkButton = document.createElement("i")
        checkButton.className = "fa-solid fa-check text-white text-xl !no-underline cursor-pointer opacity-70 transition-all duration-150 hover:opacity-100"
        checkButton.addEventListener("click", function () {
            this.parentElement.parentElement.querySelector("span").classList.toggle("line-through")
            this.parentElement.parentElement.querySelector("span").classList.toggle("decoration-white")
        })

        iconContainer.appendChild(removeButton)
        iconContainer.appendChild(checkButton)

        listItem.appendChild(textSpan)
        listItem.appendChild(iconContainer)

        taskList.appendChild(listItem);
    });
}


