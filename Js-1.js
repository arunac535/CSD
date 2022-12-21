console.log("Hello World")
let i = 4;
let nam = document.getElementById("t3").onclick = function () {
    var table = document.getElementById("t3");
    for (var k = 0, row; row = table.rows[k]; k++) {    
        for (var j = 1, col; col = row.cells[j]; j+=0) {
            table[i][j].style.color="red";    
        }
    }

}
let btnAdd = document.getElementById("submit").onclick = function () {
    document.getElementById("table").style.display = "block";

    var table = document.getElementById("table");
    var row = table.insertRow(-1);
    var index = row.insertCell(0);
    var name = row.insertCell(1);
    var subsyt = row.insertCell(2);
    var task = row.insertCell(3);

    index.innerHTML = i++;
    name.innerHTML = document.getElementById("name").value;
    subsyt.innerHTML = document.getElementById("sig").value;
    task.innerHTML = document.getElementById("task").value;


    return false;
}

