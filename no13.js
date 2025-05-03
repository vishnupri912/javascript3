let todoItemsContainer=document.getElementById("todoItemsContainer");
let addTodoButton=document.getElementById("addTodoButton")
todoInput=[
    {
        text:"Learn HTML",
        uniqueNo:1
    },
    {
        text:"Learn CSS",
        uniqueNo:2
    },
    {
        text:"Learn JS",
        uniqueNo:3
    }
];

addTodoButton.onclick=function(){
    onAddTodo();
}
let todosCount=todoInput.length;
function onLabelInput(checkboxId,labelId){
    let checkboxElement=document.getElementById(checkboxId);
    let labalElementIn=document.getElementById(labelId);
    labalElementIn.classList.toggle('checked');
}
function onDeleteInput(todoId){
    let deleteId=document.getElementById(todoId);
    todoItemsContainer.removeChild(deleteId)
}

function todoContainerInput(todo){
    let checkboxId="checkbox"+todo.uniqueNo;
    let labelId="labal"+todo.uniqueNo;
    let todoId="todo"+todo.uniqueNo;
    let todoContainer=document.createElement("li");
    todoContainer.id=todoId;
    todoContainer.classList.add("todo-item-container","d-flex","flex-row");
    todoItemsContainer.appendChild(todoContainer);
    
    let checkboxInputEle=document.createElement("input");
    checkboxInputEle.type="checkbox";
    checkboxInputEle.classList.add("checkbox-input");
    checkboxInputEle.id=checkboxId;
    checkboxInputEle.onclick=function(){
        onLabelInput(checkboxId,labelId);
    };
    todoContainer.appendChild(checkboxInputEle);
    
    let labelContainerInput=document.createElement("div");
    labelContainerInput.classList.add("label-container","d-flex","flex-row");
    todoContainer.appendChild(labelContainerInput);
    
    let labelInput=document.createElement("label");
    labelInput.setAttribute("for",checkboxId);
    labelInput.classList.add("checkbox-label");
    labelInput.id=labelId;
    labelInput.textContent=todo.text
    labelContainerInput.appendChild(labelInput);
    
    let deleteIconContainer=document.createElement("div");
    deleteIconContainer.classList.add("delete-icon-container");
    labelContainerInput.appendChild(deleteIconContainer);
    
    let deleteIconInput=document.createElement("i");
    deleteIconInput.classList.add("far","fa-trash-alt","delete-icon");
    deleteIconInput.onclick=function(){
        onDeleteInput(todoId);
    };
    deleteIconContainer.appendChild(deleteIconInput);
}
for(let todo of todoInput){
    todoContainerInput(todo);
   
}

function onAddTodo(){
    let userInput=document.getElementById("todoUserInput");
    let userInputValue=userInput.value;
    if(userInputValue===""){
        alert("Enter Valid Text");
        return;
    }
    todosCount=todosCount+1
    let userEle={
        text:userInputValue,
        uniqueNo:todosCount
    };
    todoContainerInput(userEle);
    userInput.value="";
}