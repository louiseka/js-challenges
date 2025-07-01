let toDoList = [];


document.getElementById("add-btn").addEventListener("click", () => {
    const newToDo = prompt("Type your to-do item below")
    toDoList.push(newToDo)
})

document.getElementById("remove-btn").addEventListener("click", () => {
    const removeToDo = prompt("Type the exact to do item you wish to remove")
    let index = toDoList.indexOf(removeToDo)
    if (index !== -1){
        toDoList.splice(index, 1)
    } else {
        window.alert("Item doesn't match to exisiting to-dos")
    }
})

console.log(toDoList)



// Use prompt() to let the user add and remove items from an array. Display the list in the console.

