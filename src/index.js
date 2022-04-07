document.addEventListener("DOMContentLoaded", () => {
  document.querySelector('form').addEventListener('submit', (e)=>{
    e.preventDefault()
    buildToDos(e.target.new_task_description.value);
    document.querySelector('form').reset()
  })
  
});

function buildToDos(toDo){
  let newItem = document.createElement('li')
  let button = document.createElement('button')
  button.addEventListener('click', (e)=> e.target.parentNode.remove())
  button.innerText = ' Did it! ';
  newItem.innerText = ' ' + toDo + ' ';
  newItem.appendChild(button);
  document.querySelector('#list').appendChild(newItem);
}
