function email() {
    L = document.fifo.obj1.value.length;
    if (L > 0) {
        console.log("class:" + document.getElementsByTagName("input").item(0).className);
        document.getElementsByTagName("input").item(0).className = "styletwo";
        x = new RegExp("^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,}$");
        clientemail = document.fifo.obj1.value;
        if (x.test(clientemail)) {
            console.log("class:" + document.getElementsByTagName("input").item(0).className);
            document.getElementsByTagName("input").item(0).className = "correct";

        } else {
            document.getElementsByTagName("input").item(0).className = "incorrect";
            console.log("class:" + document.getElementsByTagName("input").item(0).className);

        }
    }
    Vld();

}

function password() {
    M = document.fifo.obj2.value.length;
    if (M > 0) {
        console.log("class:" + document.getElementsByTagName("input").item(1).className);
        document.getElementsByTagName("input").item(1).className = "styletwo";
        x = new RegExp("^[+0-9]{2,}$");
        clientnmb = document.fifo.obj2.value;
        if (x.test(clientnmb)) {
            document.getElementsByTagName("input").item(1).className = "correct";
            console.log("class:" + document.getElementsByTagName("input").item(1).className);
        } else {
            document.getElementsByTagName("input").item(1).className = "incorrect";
            console.log("class:" + document.getElementsByTagName("input").item(1).className);

        }
    }
    Vld();
}

function fido() {
    if (document.fifo.obj1.className == "correct" && document.fifo.obj2.className == "correct") {
        alert("Done,Thanks.");
    } else
        alert("Something wrong , try again .");
}

function Vld() {
    if (document.fifo.obj1.className === "correct" && document.fifo.obj2.className === "correct") {
        document.getElementsByTagName("input").item(2).className = "button3";
        console.log("class:" + document.getElementsByTagName("input").item(2).className);
    } else {
        document.getElementsByTagName("input").item(2).className = "button2";
        console.log("class:" + document.getElementsByTagName("input").item(2).className);
    }
}

function init() {
    email();
    nmb();
    Vld();
}