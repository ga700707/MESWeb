//var webApiUrl = "http://localhost:49705";
var webApiUrl = ""
if (window.location.port == "5500")
    webApiUrl = "http://localhost:6500";
else
    webApiUrl = "http://localhost:6500";
console.log(webApiUrl)
emailRule = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/;


function mainInitial() {
    $("#loginForm").hide();
    $("#mainPage").show();
    $("body").css("background-image", "none");
    var generateMenuType = (getCookie('type') == 'S') ? 'S' : 0;
    $.getScript("/res/data/menuData.js").done(function () {
        //<!--管理員聊室 -->

        $.each(menuData[getCookie('type')], function () {
            $("#menu").append(
                getMenuItem(this)
            );
        });
        feather.replace();

        $.each(menuData[generateMenuType], function () {
            $("#menu").append(
                getMenuItem(this)
            );
        });
        feather.replace();
    }).fail(function (jqxhr, settings, exception) {
        $("div.log").text("Triggered ajaxError handler.");
    });
    $("#iframe-content").attr("src", "/Views/gondan/userpage.html");
    

}
function ToUserpage2(){
    $("#iframe-content").attr("src", "/Views/gondan/userpage2.html");
}
function ToAPS(){
    $("#iframe-content").attr("src", "/Views/gondan/APS.html");
}
function open_regist(){
    window.open ("Register.html", "newwindow", "height=700, width=400, top=100, left=100, toolbar=no, menubar=no, scrollbars=no, resizable=no,location=no, status=no")
}
function StudentInitial(StudentId) {
    $("#loginForm").hide();
    $("#mainPage").show();
    $("body").css("background-image", "none");
    var generateMenuType = (getCookie('type') == 'S') ? 'S' : 0;

    $.getScript("/res/data/menuData.js").done(function () {
        //<!--管理員聊天室 -->

        $.each(menuData[getCookie('type')], function () {
            $("#menu").append(
                getMenuItem(this)
            );
        });
        feather.replace();

        $.each(menuData[generateMenuType], function () {
            $("#menu").append(
                getMenuItem(this)
            );
        });
        feather.replace();
    }).fail(function (jqxhr, settings, exception) {
        $("div.log").text("Triggered ajaxError handler.");
    });
    if (StudentId>0)
        $("#iframe-content").attr("src", "/Views/Student/StudentData.html?StudentId=" + StudentId);
    else
        $("#iframe-content").attr("src", "/Views/Student/StudentManager.html?StudentId=" + StudentId);

}

var getMenuItem = function (itemData) {
    var item = $("<li>", {
        class: 'nav-item',
        onclick: 'changeContent("' + itemData.title + '" ,"' + itemData.views + '","' + itemData.command + '")'
    }).append(
        $("<a>", {
            href: itemData.link,
            html: "<span data-feather='" + itemData.icon + "'></span>" + itemData.title,
            class: 'nav-link'
        }));
    if (itemData.sub) {
        var subList = $("<ul>", {
            class: 'nav flex column mb-2'
        });
        $.each(itemData.sub, function () {
            subList.append(getMenuItem(this));
        });
        item.append(subList);
    }
    return item;
};

function changeContent(title, views, command) {
    $("#iframe-title").text(title);
    $("#iframe-content").attr("src", "/Views/" + views + "/" + command + ".html");
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function postWebApi(actions, dataField) {
    $.ajax({
        type: "post",
        url: parent.webApiUrl + actions,
        data: dataField,
        contentType: "application/json",
        error: function (e) {
            return JSON.stringify({
                "result": false,
                "data": e
            });
        },
        success: function (e) {
            return JSON.stringify({
                "result": true,
                "data": e
            });
        }
    });
}

function setCookie(cookieName, cookieValue) {
    document.cookie = cookieName + "=" + cookieValue + ";path=/";
}

function getCookie(cookieName) {
    var name = cookieName + "=";
    var cookieDecode = decodeURIComponent(document.cookie);
    var cookieItem = cookieDecode.split(';');
    for (var i = 0; i < cookieItem.length; i++) {
        var item = cookieItem[i];
        while (item.charAt(0) === ' ') {
            item = item.substring(1);
        }
        if (item.indexOf(name) === 0) {
            return item.substring(name.length, item.length);
        }
    }
    return "";
}

function accountLogin(form) {
    console.log(form.inputEmail.value);
    console.log(form.inputPassword.value);
    var StudentId = 0
    StudentId = window.location.href.split("=")[1];

    $.ajax({
        type: "POST",
        url: webApiUrl + "/account/login",
        contentType: "application/json;charset=utf-8",
        async: false,
        data: JSON.stringify({
            "username": form.inputEmail.value,
            "password": form.inputPassword.value
        }),
        success: function (result) {
            if (result == null) {
                alert("帳號或密碼輸入錯誤");
            }
            if (result.type == "T") {
                alert("權限不足");
                return false;
            }
            console.log(result);
            setCookie("id", result.id);
            setCookie("userName", result.userName);
            setCookie("type", result.type);
            setCookie("token", result.token);
            setCookie("GroupId", result.groupId);
            setCookie("nickName", result.nickName);

            mainInitial(StudentId);
            form.reset();
            $("#menu").empty();
        },
        error: function () {
            alert("伺服器有問題")
        }
    });
    return false;
}
function UserLogin(form) {
    console.log(form.inputEmail.value);
    console.log(form.inputPassword.value);
    var StudentId = 0
    StudentId = window.location.href.split("=")[1];

    $.ajax({
        type: "POST",
        url: webApiUrl + "/account/login",
        contentType: "application/json;charset=utf-8",
        async: false,
        data: JSON.stringify({
            "username": form.inputEmail.value,
            "password": form.inputPassword.value
        }),
        success: function (result) {
            if (result == null) {
                console.log("1223");
                alert("帳號或密碼輸入錯誤");
            }

            console.log(result);
            setCookie("id", result.id);
            setCookie("userName", result.userName);
            setCookie("type", result.type);
            setCookie("token", result.token);
            setCookie("GroupId", result.groupId);
            setCookie("nickName", result.nickName);

            StudentInitial(StudentId);
            form.reset();
            $("#menu").empty();
        },
        error: function () {
            alert("伺服器維修中")
        }
    });
    return false;
}
function accountLogout() {
    setCookie("login", "", -1);
    setCookie("userName", "", -1);
    setCookie("name", "", -1);
    setCookie("type", "", -1);
    setCookie("token", "", -1);
    setCookie("GroupId", "", -1);
    $("#loginForm").show();
    $("#mainPage").hide();
    $("body").css("background-image", "url('/res/img/loginpage6.jpg')");
}




function accountEdit() { // 編輯會員初始化
    $("#txtidEdit").val(getCookie('id'));
    $("#txtloginEdit").val(getCookie('userName'));
    $('#txtnameEdit').val(getCookie('nickName'));
    $('#modalEdit').modal('show');
}
function editAccountCommit() { // 編輯會員送出
    if ($('#txtpasswordEdit').val() != $('#txtConfirmPasswordEdit').val()) return alert("密碼不符");
    if ($('#txtloginEdit').val().indexOf('@') == -1) return alert("帳號格式不正確");
    $.ajax({
        type: "POST",
        headers: { 'Authorization': getCookie("token") },
        url: webApiUrl + "/am/ChangePassword",
        contentType: "application/json;charset=utf-8",
        async: false,
        data: JSON.stringify({
            'id': $("#txtidEdit").val(),
            'userName': $("#txtloginEdit").val(),
            'nickName': $("#txtnameEdit").val(),
            'password': $("#txtpasswordEdit").val(),
        }),
        success: function () {
            $('#modalEdit').modal('hide');
        }
    });
}