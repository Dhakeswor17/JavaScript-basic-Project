let textbox = document.getElementById("tarea");



textbox.addEventListener('input', function() {
    let text = this.value;
    let numchar = text.length;
    document.getElementById("charecter").innerHTML = numchar;
    text = text.trim();
    let words = text.split(" ");
    let cleanList = words.filter(function(elm) {
        return elm != " ";

    });
    document.getElementById("word").innerHTML = cleanList.length;
});