document.addEventListener("DOMContentLoaded", () => {
  document.querySelector('form').addEventListener('submit', (e)=>{
    e.preventDefault()
    buildToDos(e.target.new_task_description.value);
    console.log(e.target.new_task_description.value)
    console.log(document.querySelector("#priority-selector").value)
    document.querySelector('form').reset()
  })
  
});

function buildToDos(toDo){
  let newItem = document.createElement('li');
  let button = document.createElement('button');
  let priorityLevel = document.getElementById("priority-selector").value;
  button.addEventListener('click', (e)=> e.target.parentNode.remove())
  button.innerText = ' Did it! ';
  if (priorityLevel === "high"){
    newItem.innerText = ' ' + toDo + ' ';
    document.querySelector('#high-priority-tasks').appendChild(newItem);
  };
  if (priorityLevel === "medium" || priorityLevel ==="none"){
    newItem.innerText = ' ' + toDo + ' ';document.querySelector('#tasks').appendChild(newItem);
  };
  if (priorityLevel === "low"){
    newItem.innerText = ' ' + toDo + ' ';
    document.querySelector('#low-priority-tasks').appendChild(newItem);
  };
  newItem.appendChild(button);
  
}
