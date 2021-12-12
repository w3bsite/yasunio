let x = [];
var myList = "<ul>";

function load() {
    fetch("https://jsonplaceholder.typicode.com/todos")
        .then((response) => response.json())
        .then((res) => {
            var test = document.getElementById("list");

            res.forEach((element) => {
                test.innerHTML += element.title + `</br>`;
            });
        });
}
load();
