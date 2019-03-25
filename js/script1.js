function naming() {
    nm = document.creat.fname.value.length;
    if (nm > 0) {
        console.log("class:" + document.getElementsByTagName("input").item(0).className);
        document.getElementsByTagName("input").item(0).className = "styletwo";
        x = new RegExp("^[a-zA-Z0-9]{4,16}");
        fname = document.creat.fname.value;
        if (x.test(fname)) {
            console.log("class:" + document.getElementsByTagName("input").item(0).className);
            document.getElementsByTagName("input").item(0).className = "correct";
        } else {
            document.getElementsByTagName("input").item(0).className = "incorrect";
            console.log("class:" + document.getElementsByTagName("input").item(0).className);
        }
    }
    vld();

}

function emailing() {
    em = document.creat.femail.value.length;
    if (em > 0) {
        console.log("class:" + document.getElementsByTagName("input").item(1).className);
        document.getElementsByTagName("input").item(1).className = "styletwo";
        x = new RegExp("^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,}$");
        clientemail = document.creat.femail.value;
        if (x.test(clientemail)) {
            console.log("class:" + document.getElementsByTagName("input").item(1).className);
            document.getElementsByTagName("input").item(1).className = "correct";

        } else {
            document.getElementsByTagName("input").item(1).className = "incorrect";
            console.log("class:" + document.getElementsByTagName("input").item(1).className);

        }
    }

    vld();
}

function passwording() {
    ps = document.creat.fpassword.value.length;
    if (ps > 0) {
        console.log("class:" + document.getElementsByTagName("input").item(2).className);
        document.getElementsByTagName("input").item(2).className = "styletwo";
        x = new RegExp("^[a-zA-Z0-9]{6,16}");
        clientpassword = document.creat.fpassword.value;
        if (x.test(clientpassword)) {
            console.log("class:" + document.getElementsByTagName("input").item(2).className);
            document.getElementsByTagName("input").item(2).className = "correct";

        } else {
            document.getElementsByTagName("input").item(2).className = "incorrect";
            console.log("class:" + document.getElementsByTagName("input").item(2).className);

        }
    }

    vld();
}

function rpasswording() {
    rps = document.creat.frpassword.value.length;
    if (rps > 0) {
        console.log("class:" + document.getElementsByTagName("input").item(3).className);
        document.getElementsByTagName("input").item(3).className = "styletwo";

        if (document.creat.fpassword.value == document.creat.frpassword.value) {
            console.log("class:" + document.getElementsByTagName("input").item(3).className);
            document.getElementsByTagName("input").item(3).className = "correct";

        } else {
            document.getElementsByTagName("input").item(3).className = "incorrect";
            console.log("class:" + document.getElementsByTagName("input").item(3).className);

        }
    }

    vld();
}

function vld() {
    if (document.creat.fname.className == "correct" && document.creat.femail.className == "correct" && document.creat.fpassword.className == "correct" && document.creat.frpassword.className == "correct") {
        document.getElementsByTagName("input").item(4).className = "button3";
    } else {
        document.getElementsByTagName("input").item(4).className = "button2";

    }
}

function fvalider() {
    if (document.creat.fname.className == "correct" && document.creat.femail.className == "correct" && document.creat.fpassword.className == "correct" && document.creat.frpassword.className == "correct") {
        alert("Welcome");
        // alert(document.creat.fname.value);
      //  alert(document.creat.fname.value);

    } else
        alert("Something wrong , try again .");

}

function init() {
    naming();
    emailing();
    passwording();
    rpasswording();

}
