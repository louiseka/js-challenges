const listItems = document.querySelectorAll("#draggableList li")

let draggedItem = null

listItems.forEach(item => {
    item.addEventListener("dragstart", () => {
        draggedItem = item
        item.classList.add("dragging")
    })

    item.addEventListener("dragend", () => {
        draggedItem = null
        item.classList.remove("dragging")
    })

    item.addEventListener("dragover", (e) => {
        e.preventDefault()
        const list = document.getElementById("draggableList")
        const draggingItem = document.querySelector(".dragging")

        if (draggingItem && draggedItem !== item) {
            list.insertBefore(draggedItem, item)
        }
    })
})