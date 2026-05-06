let newItem = document.createElement("li");
newItem.classList.add("item");
let koleksiyon = document.getElementsByClassName("item");

let TodoNumber = document.getElementsByClassName("TodoNumber")[0];

let todoList = document.getElementById("list");
newItem.innerText = "shimmy shimmy ya shimmy yay shimy yaa drank swalala drank swalala";

let newItem2 = document.createElement("li");
newItem2.classList.add("item");
newItem2.innerText = "Another todo item";

todoList.appendChild(newItem);
todoList.appendChild(newItem2);
TodoNumber.innerText = koleksiyon.length;