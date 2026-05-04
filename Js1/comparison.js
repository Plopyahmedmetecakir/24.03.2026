// == EŞİT
// != EŞİT DEĞİL
// >= BÜYÜK VEYA EŞİT
// <= EŞİT VEYA KÜÇÜK
// > BÜYÜKTÜR
// < KÜÇÜKTÜR

//bool açalım
let kullaniciadi = "admin";
let acces = true;
let yas = 19;
if (acces == true && yas >= 18) {
    alert("Hoşgeldin " + kullaniciadi);
}
else {
    alert("Geçersiz anahtar veya yaşınız tutmuyor");
}