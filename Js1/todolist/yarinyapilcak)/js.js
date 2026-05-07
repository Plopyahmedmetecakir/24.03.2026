const ST="todoItems";
const todoInput=document.getElementById("todo-input");
const addButton=document.getElementById("add-button");
const todoList=document.getElementById("todo-list");
const statusFilter=document.getElementById("status-filter");
let todos=[];
addButton.addEventListener("click",addNewTodo);
todoInput.addEventListener("keydown",e=>e.key==="Enter"&&addNewTodo());
statusFilter.addEventListener("change",filterTodos);
load();
function addNewTodo(){
  const text=todoInput.value.trim();
  if(!text) return;
  const item={id:Date.now().toString(36)+Math.random().toString(36).slice(2),text,status:"todo"};
  todos.push(item);
  save();
  appendTodo(item);
  todoInput.value="";
  filterTodos();
}
function appendTodo(item){
  const li=document.createElement("li");
  li.className=`todo-item status-${item.status}`;
  li.dataset.id=item.id;
  li.dataset.status=item.status;
  li.innerHTML=`<span class="todo-text"></span><button class="status-btn blue-btn" type="button"></button><button class="status-btn green-btn complete-btn" type="button"></button><button class="delete-btn" type="button">Sil</button>`;
  li.querySelector(".todo-text").textContent=item.text;
  const statusBtn=li.querySelector(".status-btn.blue-btn");
  const doneBtn=li.querySelector(".complete-btn");
  const delBtn=li.querySelector(".delete-btn");
  statusBtn.onclick=()=>{setStatus(item.id,li,li.dataset.status==="progress"||li.dataset.status==="done"?"todo":"progress");filterTodos();};
  doneBtn.onclick=()=>{setStatus(item.id,li,li.dataset.status==="done"?"todo":"done");filterTodos();};
  delBtn.onclick=()=>{li.classList.add("removing");setTimeout(()=>{if(todoList.contains(li)){todos=todos.filter(t=>t.id!==item.id);save();todoList.removeChild(li);filterTodos();}},250);};
  todoList.appendChild(li);
  refreshStatus(li);
  requestAnimationFrame(()=>li.classList.add("visible"));
}
function setStatus(id,li,status){
  const item=todos.find(t=>t.id===id);
  if(!item) return;
  item.status=status;
  li.dataset.status=status;
  save();
  refreshStatus(li);
}
function refreshStatus(li){
  const status=li.dataset.status;
  const statusBtn=li.querySelector(".status-btn.blue-btn");
  const doneBtn=li.querySelector(".complete-btn");
  li.className=`todo-item status-${status}`;
  if(status==="done"){
    doneBtn.textContent="✓";
    doneBtn.title="Tamamlandı. Tekrar basınca çıkar.";
    statusBtn.textContent="Sıraya Al";
    statusBtn.title="Tekrar al";
  } else {
    doneBtn.textContent="Tamamlandı";
    doneBtn.title="Tamamlandı olarak işaretle";
    statusBtn.textContent="Sıraya Al";
    statusBtn.title="Sıraya al";
  }
}
function filterTodos(){
  const f=statusFilter.value||"all";
  todoList.querySelectorAll("li").forEach(li=>li.style.display=f==="all"||li.dataset.status===f?"flex":"none");
}
function save(){localStorage.setItem(ST,JSON.stringify(todos));}
function load(){
  const data=localStorage.getItem(ST);
  if(!data) return;
  try{
    todos=JSON.parse(data)||[];
    todos.forEach(appendTodo);
    filterTodos();
  }catch(e){
    console.warn(e);
    todos=[];
  }
}
