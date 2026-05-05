let array = ["random", "words", "for", "testing"];
for (let name of array) {
    alert(name);
}
array.forEach(function(item, index) {
    alert(item);
    alert(index);
});