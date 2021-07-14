function chek() {
    var loginName = document.getElementById("loginId")
    var loginPass = document.getElementById("LoginPassward")
    var regex = /^[a-zA-Z0-9]+([._]?[a-zA-Z0-9]+)*$/gim
    var regForPass = /^[a-zA-Z0-9]+([._]?[a-zA-Z0-9]+)*$/gim
    if (!regex.test(loginName.value)) {
        loginName.focus()
        loginName.value = ""
        loginName.classList.add("validation")
        loginName.placeholder = "Please Write Your Name"
        return false
    }
    else if (!regForPass.test(loginPass.value)) {
        loginPass.focus()
        loginPass.value = ""
        loginPass.classList.add("validation")
        loginPass.placeholder = "Please Write Your Passward"
        return false
    }

    else {
        loginPass.classList.remove("validation")
        loginName.classList.remove("validation")
        let arr = JSON.parse(localStorage.getItem("array"));
        loginPass = loginPass.value
        loginName = loginName.value
        for (var i = 0; i < arr.length; i++) {
            if ((loginName == arr[i].userName || loginName == arr[i].userMail) && loginPass == arr[i].passward) {
                window.location.href = "userPage.html"
            }
        }
    }













    // let arr = JSON.parse(localStorage.getItem("array"));
    //         loginPass = loginPass.value
    //         loginName = loginName.value
    // for (var i = 0; i < arr.length; i++) {
    //     if ((loginName == arr[i].userName || loginName == arr[i].userMail) && loginPass == arr[i].passward) {
    //         window.location.href = "userPage.html"
    //     }
    // }
}