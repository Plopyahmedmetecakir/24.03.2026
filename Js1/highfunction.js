function sıcmak()   {
    osur();
    ise();
    bok();
}
function osur() {
    alert("PIRTTT");
}
function ise() {
    alert("ÇİŞŞŞŞŞŞ");
}
function bok() {
    alert("BLOPPP");
}
sıcmak();

//mapornek
let sayilar = [1, 2, 3, 4];
let kareleri = sayilar.map(function(num) {
    return num * num; // her sayi için yeni sayi kareli hali dondur
});

console.log(sayilar); // og dizi aynı kalır
console.log(kareleri); // yeni dizi