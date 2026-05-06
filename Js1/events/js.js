//TANIMLAMALAR
let button = document.querySelector(".submit");
let liste = document.querySelector(".list");
let baslik = document.querySelector(".baslik");
let items =liste.children
let listesayi = liste.children.length;
let ozel = document.querySelector(".ozel");

// button.addEventListener("click", function adiolsun() {
//     alert("yeni item ekledin!");
// });
//BUTONA EVENT EKLEME
button.addEventListener("click", ekle);
//KEYLİ EVENT EKLEME
button.addEventListener("keypress", function(event){
    if (event.key === "Enter") {
        ekle();
        ozellestiren();
    }
});

function ekle() {
    alert("yeni item ekledin!");
    let newItem = document.createElement("li");
    newItem.classList.add("item");
    newItem.innerText="Item "+ (listesayi + 1);
    liste.appendChild(newItem);
    listesayi++;
}

//RENK ÖZELLİK ATAMA
function renkdegistir() {
    for (let i = 0; i < items.length; i++) {
        if (i % 2 == 0) {
            baslik.style.color = "red";
    }
    else {
        baslik.style.color = "blue";
    }
}   
}
// SINIF EKLEME
function ozellestiren(){
   baslik.classList.add("ozel");
}

//localde tutma oluşturma
localStorage.setItem("liste", "asopdkansdklş");
sessionStorage.setItem("liste", "bilmem ne");

//localden çekme
let local = localStorage.getItem("liste");
let session = sessionStorage.getItem("liste");
console.log(local);
console.log(session);

//donusturmeli

let liste2 = ["item1", "item2", "item3"];
localStorage.setItem("liste2", JSON.stringify(liste2));
let liste2Cek = JSON.parse(localStorage.getItem("liste2"));
console.log(liste2Cek);