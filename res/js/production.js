




function init(){
    // Create
    $("#peopleCreate_Content").load("/res/modalCreate/orderCreate.html");
    $("#cutterCreate_Content").load("/res/modalCreate/purchaseCreate.html");
    $("#machineCreate_Content").load("/res/modalCreate/assemblyCreate.html");
    $("#jigCreate_Content").load("/res/modalCreate/orderSelfCreate.html");
    $("#materialCreate_Content").load("/res/modalCreate/orderOutCreate.html");

    // Edit
    $("#peopleEdit_Content").load("/res/modalEdit/orderEdit.html");
    $("#cutterEdit_Content").load("/res/modalEdit/purchaseEdit.html");
    $("#machineEdit_Content").load("/res/modalEdit/assemblyEdit.html");
    $("#jigEdit_Content").load("/res/modalEdit/orderSelfEdit.html");
    $("#materialEdit_Content").load("/res/modalEdit/orderOutEdit.html");

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