const inputtdl = document.querySelector('.textarea')
const buttontdl = document.querySelector('.buttoninput')
const listtdl = document.querySelector('.todolist')
const dateinput=document.querySelector('.dateInput')
const timeinput=document.querySelector('.timeInput')
function clickButton(e) {
    e.preventDefault()
    addTodo()
}

// adding todoList
function addTodo() {
    if (inputtdl.value === '' | dateinput.value === '' | timeinput.value===''){
        alert("Please fill in all the Fields")
        return
    }

    const itemall = document.createElement(`div`)
    itemall.classList.add('itemall')

    const item = document.createElement(`p`)
    item.classList.add('item')
    item.innerText = `${inputtdl.value} \n Deadline Date: ${dateinput.value} \n Deadline Time: ${timeinput.value}`
    itemall.appendChild(item)

    const checkbutton = document.createElement("button")
    checkbutton.innerHTML = '<i class="fa-solid fa-check"></i>'
    checkbutton.classList.add("check-button")
    itemall.appendChild(checkbutton)

    const trashbutton = document.createElement("button")
    trashbutton.innerHTML = '<i class="fa-solid fa-trash"></i>'
    trashbutton.classList.add("trash-button")
    itemall.appendChild(trashbutton)

    listtdl.appendChild(itemall);
    inputtdl.value = '';
    dateinput.value='';
    timeinput.value='';
}

// checking and delete todoList 
function okdel(e) {
    const item = e.target

    // check
    if (item.classList[0] === 'check-button') {
        const todolist = item.parentElement
        todolist.classList.toggle('checklist')
        
    }

    // delete
    if (item.classList[0] === 'trash-button') {
        const todolist = item.parentElement
        todolist.remove()
    }
}

buttontdl.addEventListener('click', clickButton)
listtdl.addEventListener('click', okdel)