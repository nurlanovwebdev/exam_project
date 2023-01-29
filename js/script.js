const nameInput = document.querySelector('.input-one');
const surnameInput = document.querySelector('.input-two')
const addBtn = document.querySelector(".add-btn")
const ul = document.querySelector('.ul')

function addTask (){
    let tasks = JSON.parse(localStorage.getItem("task")) || []
    ul.innerHTML = ""
    tasks.map((el) => {
        let newList = `<li class="list-group-item d-flex align-items-center justify-content-between"> 
<span class="d-flex align-items-center">
<div class="line">
<h2>${el.name.slice(0,1).toUpperCase()}${el.surname.slice(0,1).toUpperCase()}</h2>
</div>  name: <b> ${el.name.toUpperCase()}</b>    surname: <b>${el.surname.toUpperCase()}</b>
    </span>
         <button class=" del-btn btn btn-primary">delete</button></li>`
        ul.innerHTML += newList
    })
    delTask()
}
addTask()
addBtn.addEventListener("click",() => {
    if (nameInput.value !== "" && surnameInput.value !== "") {
        let tasks = JSON.parse(localStorage.getItem("task")) || []
        const newList = {
            id: 1,
            name: nameInput.value,
            surname: surnameInput.value
        }
        tasks = [...tasks,newList]
        localStorage.setItem("task",JSON.stringify(tasks))
        addTask()
    }
})
function delTask() {
    let tasks = JSON.parse(localStorage.getItem("task"))
    const buttons = document.querySelectorAll(".del-btn")
    buttons.forEach((el, index) => {
        el.addEventListener("click", () => {
             tasks = tasks.filter((el, idx) => {
                return index !== idx
            })
            localStorage.setItem("task", JSON.stringify(tasks))
            addTask()
        })
    })
}
