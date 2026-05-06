let todolist = [{tiem:'buy milk',duedate:'4/02/2026'},{item:'go to college',duedate:'9/02/2026'}];
displayItems();

function addTodo(){
   let inputElement = document.querySelector
   ('#todo-input');
   let dateinputElement = document.querySelector
   ('#todo-date');
   let todoItem = inputElement.value;
   let todoDate = dateinputElement.value;
   todolist.push({item: todoItem,duedate: tododate});
   inputElement.value = '';
   dateElement.value = '';
   displayItems();
}
function displayItems(){
   let containerElement = document.querySelector
   ('#todo-container'); 
   let newHtml = '';
    
   for(let i=0;i<todolist.length;i++){
    newHtml += `
    <div>
    <span>${todolist[i]}</span>
    <button onclick="todoList.splice(${i},1);
    displayItems();">Delete</button>
    </div>
    `;
    
   }
   containerElement.innerHTML=newHtml;
}
