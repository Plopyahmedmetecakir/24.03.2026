// function selam abi
function abi()  {
let name = prompt("What is your name?");
console.log("Hello, " + name + "!");
alert("Welcome, " + name + "!");
}
abi();
// function zirttiriport selamlama
function zirttiriport(ad) {
    alert("Hoşgeldin, " + ad + "!");
}
let ad = prompt("Adınız nedir?");
zirttiriport(ad);
//function max bulma (hazır fonksiyon)
let maxsayi = Math.max(1,2,3,4,5);
alert("En büyük sayı: " + maxsayi);
//function max bulma
function maksbul(sayi1, sayi2) {
    if(sayi1 > sayi2) {
        alert("Birinci sayı daha büyük: " + sayi1);
        
    } else {
        alert("İkinci sayı daha büyük: " + sayi2);
        
    }
}
let sayi11 = prompt("Birinci sayıyı girin:");
let sayi22 = prompt("İkinci sayıyı girin:");
maksbul(sayi11, sayi22);
