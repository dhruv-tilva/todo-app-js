document.addEventListener("DOMContentLoaded", init);

function init() {
    document.getElementById("plus").addEventListener("click", addTodo)
    document.getElementById("inp").addEventListener("keypress", (event) => {
        if (event.keyCode === 13) {
            addTodo()
        }
    })
}

function addTodo() {
    let userInput = document.getElementById("inp").value
    if (userInput) {
        const todo = document.createElement("li")
        todo.className = "bg-rose-700 p-2 flex justify-between items-center mb-2"
        const spanText = document.createElement("span")
        spanText.className = "text-white text-lg font-semibold"
        spanText.innerText = userInput

        const iconContainer = document.createElement("span")
        iconContainer.className = "flex items-center space-x-3 !no-underline"

        const trash = document.createElement("i")
        trash.className = "fa-solid fa-trash text-white text-xl !no-underline cursor-pointer opacity-70 transition-all duration-150 hover:opacity-100"
        trash.onclick = function () {
            this.parentElement.parentElement.remove()
        }

        const check = document.createElement("i")
        check.className = "fa-solid fa-check text-white text-xl !no-underline cursor-pointer opacity-70 transition-all duration-150 hover:opacity-100"
        check.onclick = function () {
            this.parentElement.parentElement.querySelector("span").classList.toggle("line-through")
            this.parentElement.parentElement.querySelector("span").classList.toggle("decoration-white")
        }

        iconContainer.append(trash)
        iconContainer.append(check)

        todo.append(spanText)
        todo.append(iconContainer)
        document.getElementById("lists").append(todo)
        document.getElementById("inp").value = ""
        document.getElementById("inp").focus()
    }
}
