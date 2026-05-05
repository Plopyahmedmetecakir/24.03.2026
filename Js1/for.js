let list = ["Begüm","Mete","Murat","Ömer","Gyro Zeppeli", "Johnny Joestar"];
for(let i = 0; i < list.length; i++) {
    alert(list[i]);
    if(list[i] === "Johnny Joestar") {
        alert("Bu partın Jojosu!");
        continue;
    }
}