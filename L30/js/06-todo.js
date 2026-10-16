console.log("TODO started")

let input = document.getElementById("newTaskInput");
let button = document.getElementById("addTaskButton");
let list = document.getElementById("taskList");

console.log(input)
console.log(button)
console.log(list)

button.addEventListener("click", () => {
    console.log("Button clicked")
});

button.addEventListener("click", () => {
    const text = input.value.trim();
    if (text === "") {
        log("New task added: " + text);
        return
    }
    console.log(text);
    const li = document.createElement("li")
    console.log(li)
    li.textContent = text;
    li.addEventListener("click", () => {
        console.log("Remove item", li.textContent)
        li.remove();
    })

    list.append(li);
    input.value = "";
});

const li = document.createElement("li")
console.log(li)
li.textContent = "New Task"
