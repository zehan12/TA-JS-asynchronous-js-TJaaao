let input = document.querySelector("input[type=text]");
let ul = document.querySelectorAll("ul");
console.log(ul);

let todoList =[];
let todo;

var ID = function () {
    // Math.random should be unique because of its seeding algorithm.
    // Convert it to base 36 (numbers + letters), and grab the first 9 characters
    // after the decimal.
    return Math.random().toString(36).substr(2, 24)+Math.random().toString(36).substr(2, 4)+Math.random().toString(6).substr(2, 9);
};

function date(){
    const event = new Date()
    // expected output: Wed Oct 05 2011 16:48:00 GMT+0200 (CEST)
    // (note: your timezone may vary)
    return event.toString().split(" ").splice(2,4).join("")
}

input.addEventListener("keyup",(event)=>{
    if (event.keyCode === 13 && event.target.value.length > 0){
    console.log(event.target.value)
    todo = {
        _id: ID(),
        title: event.target.value,
        isCompleted: false,
        createdAt: date(),
    }   
    todoList.push(todo);
    createUI()  
    }
})

function toggle(event){
    let key = event.target.dataset.id;
    console.log(key)
}

//! create UI
function createUI(){
    Array.prototype.slice.call(ul).forEach((uls)=>{      
    let deleted = document.createElement("span");
    deleted.innerText = "❌ "
    deleted.classList.add("delete");
    let li = document.createElement("li");
    let inputCheck = document.createElement("input");
    li.innerHTML = `<span>${todo.title}</span>`
    inputCheck.type = "checkbox";
    inputCheck.setAttribute("data-key",date())
    inputCheck.checked = todo.isCompleted;
    inputCheck.addEventListener('click',(event)=>{
        let key = event.target.dataset.id;
        console.log(key)
    })
    li.append(deleted);
    li.prepend(inputCheck);
    uls.append(li);
    input.value = "";

    //! delete element from array threw forEach
    todoList.forEach((e,i)=>{
    
    deleted.setAttribute("data-id",e._id)
    deleted.addEventListener('click',(event)=>{

            if ( event.target.dataset.id === e._id){
                todoList.splice(i,1);
                // console.log(uls.children[i])
                console.log(uls.removeChild(uls.children[i]))
    }
    })
    })   
})
};




