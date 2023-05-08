let addToDoButton = document.getElementById("addToDo");
let toDoContainer = document.getElementById("toDoContainer");
let inputField = document.getElementById("inputField");

addToDoButton.addEventListener('click', ()=> {
const paragraph = document.createElement('p');
paragraph.classList.add('paragraph-styling');
paragraph.innerText = inputField.value;
toDoContainer.appendChild(paragraph);
inputField.value = "";
// paragraph.addEventListener('click', ()=> {
//     paragraph.style.textDecoration = "line-through";
    
paragraph.addEventListener('click', ()=> {
    toDoContainer.removeChild(paragraph);
    })

})










// class ToDoList {
//     constructor(buy, sell, trade, build){
//         this.buy = buy;
//         this.sell = sell;
//         this.trade = trade;
//         this.build = build;
//     }
//     add(taskName){
//         this.task = taskName
//         this.item = document.createElement('li')
//         this.deleteBtn = document.createElement('button')
//         this.deleteBtn.textContent = "Delete task"
//         this.item.textContent=this.task
//         this.item.appendChild(this.deleteBtn)
//         this.list.appendChild(this.item)

//     }
//     delete() {
//         task.remove()
//     }
// }

// const taskInput = document.querySelector(".task-name")
// const addButton = document.querySelector(".task-add")
// const list = document.querySelector(".task-list ul")
// // if (inputValue === '') {
// //     alert("You must write something!");
// //   } else {
// //     document.getElementById("myUL").appendChild(li);
// //   }
// //   document.getElementById("myInput").value = "";



// const todo = new ToDoList(list)

// addButton.addEventListener('click', ()=> {
//     todo.add(taskInput.value)
// })
// // deleteButton.addEventListener('click', ()=> {
// //     todo.delete(taskInput.value)
// // })
// // deleteButton.onclick = deleteTask;



