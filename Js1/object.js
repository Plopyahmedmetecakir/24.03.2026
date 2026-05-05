//object yazıyoz
let cocukadam = {
    ad : "Ahmet Mete",
    soyad : "Çakır",
    yas : 18,
    evli: false,
    karsilamasi: function() {
        if(evli == true ) {
            alert("Merhaba, ben " + ad + " " + soyad + ". Yaşım " + yas + ". Evliyim.");
        } else {
            alert("Merhaba, ben " + ad + " " + soyad + ". Yaşım " + yas + ". Bekarım.");
        }
    }
}

cocukadam.karsilamasi();