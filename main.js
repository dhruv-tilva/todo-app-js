

const addTodo = () => {
    let userInput = document.getElementById("inp").value
    if (userInput) {
        const todo = document.createElement("li")
        todo.innerHTML = `<span
    class="text-white text-lg font-semibold">${userInput}</span>
<span class="flex items-center space-x-3 !no-underline"><i
        class="fa-solid fa-trash text-white text-xl !no-underline cursor-pointer opacity-70 transition-all duration-150 hover:opacity-100" onClick="removeTodo(this)"></i><i
        class="fa-solid fa-check text-white text-xl !no-underline cursor-pointer opacity-70 transition-all duration-150 hover:opacity-100" onClick="checkTodo(this)"></i></span>`
        todo.className = "bg-rose-700 p-2 flex justify-between items-center mb-2"
        document.getElementById("lists").appendChild(todo)
        document.getElementById("inp").value = ""

        // const removeButton = document.getElementsByClassName("fa-trash")
        // console.log(removeButton);
        document.getElementById("inp").focus()
    }
}

document.getElementById("plus").addEventListener("click", addTodo)
document.getElementById("inp").addEventListener("keypress", (event) => {
    if (event.keyCode === 13) {
        addTodo()
    }
})
const removeButton = document.getElementsByClassName("fa-trash")

const removeTodo = (button) => {
    const parent = button.parentElement.parentElement
    parent.remove()
}


const checkTodo = (button) => {
    const parent = button.parentElement.parentElement.querySelector("span")
    parent.classList.toggle("line-through")
    parent.classList.toggle("decoration-white")
}


