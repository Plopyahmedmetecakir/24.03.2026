let freeknyou = {
    lyric: "Tonight i need your bodyy, Tonight you got my timee,Tonight you wont be sorry, Tonight you got my mind...",
    by: "Jodeci",
}
function guessTheSong() {
    let tahmin = prompt("Şarkıyı tahmin et, sözleri: " + freeknyou.lyric + "by: " + freeknyou.by);
    if (tahmin == "Freek'n You") {
        alert("Tebrikler! Doğru şarkıyı buldun.");
    } else {
        alert("Üzgünüm, yanlış şarkı.");
    }
}
guessTheSong();s
aler("Sırada aklımda tutacağım başka bir şey var bir sayı tuttum tahmin et bakalım");
let sayi = Math.random() * 100;
lettahminsayi = prompt("Tahminin (0 ve 100 arası): ");
if (tahminsayi == sayi) {
    alert("Helal .");
} else {
    alert("Zort! Yanlış sayı. Doğru sayım " + sayi + " idi.");
}
alert("tamam yeter git artık");