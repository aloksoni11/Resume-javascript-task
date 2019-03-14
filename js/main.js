function editable() {
    var x = document.getElementsByClassName("mydiv");
    console.log(x.length);
    for (i = 0; i < x.length; i++) {
        x[i].contentEditable = "true";
    }
}

function notedit() {
    var y = document.getElementsByClassName("mydiv");
    console.log(y.length);
    for (i = 0; i < y.length; i++) {
        y[i].contentEditable = "false";
    }
    //    alert("hi");
    //    var edit = document.getElementById("Head-name").contentEditable = "false";
    //    var sub = document.getElementById("sub-title").contentEditable = "false";
    //    var profile = document.getElementById("profile-data").contentEditable = "false";
    //    var contact = document.getElementById("contact-data").contentEditable = "false";
    //    var experience = document.getElementById("experience").contentEditable = "false";
    //    var Education = document.getElementById("Education").contentEditable = "false";
    //    var skill = document.getElementById("skill").contentEditable = "false";
    //    var icon = document.getElementById("Icon").contentEditable = "false";
}

function editbutton() {
    var button = document.getElementById("edit-icon");
    var not = document.getElementById("not-edit");
    if (not.style.display === "none") {
        not.style.display = "block";
        button.style.display = "none";
        editable();
    }
    else {
        button.style.display = "block";
        not.style.display = "none";
        notedit();
    }
}