




function init(){
    // Create
    $("#peopleCreate_Content").load("/res/modalCreate/peopleCreate.html");
    $("#cutterCreate_Content").load("/res/modalCreate/cutterCreate.html");
    $("#machineCreate_Content").load("/res/modalCreate/machineCreate.html");
    $("#jigCreate_Content").load("/res/modalCreate/jigCreate.html");
    $("#materialCreate_Content").load("/res/modalCreate/materialCreate.html");

    // Edit
    $("#peopleEdit_Content").load("/res/modalEdit/peopleEdit.html");
    $("#cutterEdit_Content").load("/res/modalEdit/cutterEdit.html");
    $("#machineEdit_Content").load("/res/modalEdit/machineEdit.html");
    $("#jigEdit_Content").load("/res/modalEdit/jigEdit.html");
    $("#materialEdit_Content").load("/res/modalEdit/materialEdit.html");

}
function peopleCreate(){
    $("#peopleCreate").modal("show");
}

function cutterCreate(){
    $("#cutterCreate").modal("show");
}

function machineCreate(){
    $("#machineCreate").modal("show");
}

function materialCreate(){
    $("#materialCreate").modal("show");
}

function jigCreate(){
    $("#jigCreate").modal("show");
}



function peopleEdit(id){
    $("#peopleEdit_title").text(id + " 編輯頁面")
    $("#peopleEdit").modal("show");
}

function machineEdit(id){
    $("#machineEdit_title").text(id + " 編輯頁面")
    $("#machineEdit").modal("show");
}

function cutterEdit(id){
    $("#cutterEdit_title").text(id + " 編輯頁面")

    $("#cutterEdit").modal("show");
}



function materialEdit(id){
    $("#materialEdit_title").text(id + " 編輯頁面")

    $("#materialEdit").modal("show");
}

function jigEdit(id){
    $("#jigEdit_title").text(id + " 編輯頁面")

    $("#jigEdit").modal("show");
}