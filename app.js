
function Submit() {
    var name = document.getElementById("name")
    var userName = document.getElementById("userName");
    var contactNo = document.getElementById("contactNo");
    var address = document.getElementById("address");
    var userMail = document.getElementById("userMail");
    var userPassward = document.getElementById("userPassward");    
    var regForName = /^[a-zA-Z0-9]+([._]?[a-zA-Z0-9]+)*$/gim
    var regForUName = /^[a-zA-Z0-9]+([._]?[a-zA-Z0-9]+)*$/gim
    var regForContNo = /([+]?\d{1,2}[.-\s]?)?(\d{3}[.-]?){2}\d{4}/gim
    var regForAddress = /^[a-zA-Z0-9]+([._]?[a-zA-Z0-9]+)*$/gim
    var regForMail = /^[^\s@]+@[^\s@]+$/gm;
    var regForPass = /^[a-zA-Z0-9]+([._]?[a-zA-Z0-9]+)*$/gim
            if (!regForName.test(name.value)) {
                name.focus();
                name.value = ""
                name.classList.add("validation")
                name.placeholder = "Please Write Your Name"
                return false;
            }
            else if (!regForUName.test(userName.value)) {
                userName.focus();
                userName.value = ""
                userName.classList.add("validation")
                userName.placeholder = "Invalid!"
                return false;
            }
            else if (!regForContNo.test(contactNo.value)) {
                contactNo.focus();
                contactNo.value = ""
                contactNo.classList.add("validation")
                contactNo.placeholder = "Should Be A 11 Dig. No."
                return false;
        }

            else if (!regForAddress.test(address.value)) {
                address.focus();
                address.value = ""
                address.classList.add("validation")
                address.placeholder = "Please Enter Your Adress"
                return false;
            }
            else if (!regForMail.test(userMail.value)) {
                userMail.focus();
                userMail.value = ""
                userMail.classList.add("validation")
                userMail.placeholder = "Should Be Like xyx@gmail.com"
                return false;
            }

           else if (!regForPass.test(userPassward.value)) {
                userPassward.focus();
                userPassward.value = ""
                userPassward.classList.add("validation")
                userPassward.placeholder = "Please Chose A Passward"
                return false;
            }

        else {
            userName.classList.remove("validation")
            userName.classList.remove("validation")
            contactNo.classList.remove("validation")
            address.classList.remove("validation")
            userMail.classList.remove("validation")
            userPassward.classList.remove("validation")
            if (localStorage.getItem("array") === null) {
                let arrofobjs = [];
                localStorage.setItem("array", JSON.stringify(arrofobjs))
            }
    
            var userInfo = {
                name: name.value,
                userName: userName.value,
                contactNo: contactNo.value,
                address: address.value,
                userMail: userMail.value,
                passward: userPassward.value,
            }
            let arr = JSON.parse(localStorage.getItem("array"));
            arr.push(userInfo)
            localStorage.setItem("array", JSON.stringify(arr))
            window.location.href = "login.html"
    
        }
    }



















































































// function validations() {

//     var inputs = document.getElementsByTagName("input")

//     for (var i = 0; i < inputs.length; i++) {
//         if (inputs[i].id == "name") {
//             console.log(inputs[i])
//             var regForName = /^[a-zA-Z0-9]+([._]?[a-zA-Z0-9]+)*$/gim
//             if (!regForName.test(inputs[i].value)) {
//                 inputs[i].focus();
//                 inputs[i].value = ""
//                 inputs[i].classList.add("validation")
//                 inputs[i].placeholder = "Please Write Your Name"
//                 return false;
//             }
//             else {
//                 inputs[i].classList.remove("validation")
//             }
//         }
//         if (inputs[i].id == "userName") {
//             console.log(inputs[i])
//             var regForName = /^[a-zA-Z0-9]+([._]?[a-zA-Z0-9]+)*$/gim
//             if (!regForName.test(inputs[i].value)) {
//                 inputs[i].focus();
//                 inputs[i].value = ""
//                 inputs[i].classList.add("validation")
//                 inputs[i].placeholder = "Invalid!"
//                 return false;
//             }
//             else {
//                 inputs[i].classList.remove("validation")
//             }
//         }
//         if (inputs[i].id == "contactNo") {
//             console.log(inputs[i])
//             var regForContNo = /([+]?\d{1,2}[.-\s]?)?(\d{3}[.-]?){2}\d{4}/gim
//             if (!regForContNo.test(inputs[i].value)) {
//                 inputs[i].focus();
//                 inputs[i].value = ""
//                 inputs[i].classList.add("validation")
//                 inputs[i].placeholder = "Should Be A 11 Dig. No."
//                 return false;
//             }
//             else {
//                 inputs[i].classList.remove("validation")
//             }
//         }
//         if (inputs[i].id == "address") {
//             console.log(inputs[i])
//             var regForPass = /^[a-zA-Z0-9]+([._]?[a-zA-Z0-9]+)*$/gim
//             if (!regForPass.test(inputs[i].value)) {
//                 inputs[i].focus();
//                 inputs[i].value = ""
//                 inputs[i].classList.add("validation")
//                 inputs[i].placeholder = "Please Enter Your Adress"
//                 return false;
//             }
//             else {
//                 inputs[i].classList.remove("validation")
//             }
//         }
//         if (inputs[i].id == "userMail") {
//             var regForMail = /^[^\s@]+@[^\s@]+$/gm;
//             if (!regForMail.test(inputs[i].value)) {
//                 inputs[i].focus();
//                 inputs[i].value = ""
//                 inputs[i].classList.add("validation")
//                 inputs[i].placeholder = "Should Be Like xyx@gmail.com"
//                 return false;
//             }
//             else {
//                 inputs[i].classList.remove("validation")
//             }
//         }
//         if (inputs[i].id == "userPassward") {
//             console.log(inputs[i])
//             var regForPass = /^[a-zA-Z0-9]+([._]?[a-zA-Z0-9]+)*$/gim
//             if (!regForPass.test(inputs[i].value)) {
//                 inputs[i].focus();
//                 inputs[i].value = ""
//                 inputs[i].classList.add("validation")
//                 inputs[i].placeholder = "Please Chose A Passward"
//                 return false;
//             }
//             else {
//                 inputs[i].classList.remove("validation")
//             }
//         }

//     }
//     return true;
// }

// function Submit() {
//     var valstrue = validations()
//     if (!valstrue) {
//         return;
//     }
//     else {
//         var name = document.getElementById("name");
//         name = name.value
//         var userName = document.getElementById("userName");
//         userName = userName.value
//         var contactNo = document.getElementById("contactNo");
//         contactNo = contactNo.value
//         var address = document.getElementById("address");
//         address = address.value
//         var userMail = document.getElementById("userMail");
//         userMail = userMail.value
//         var userPassward = document.getElementById("userPassward");
//         userPassward = userPassward.value


//         if (localStorage.getItem("array") === null) {
//             let arrofobjs = [];
//             localStorage.setItem("array", JSON.stringify(arrofobjs))
//         }
//         var userInfo = {
//             name: name,
//             userName: userName,
//             contactNo: contactNo,
//             address: address,
//             userMail: userMail,
//             passward: userPassward,
//         }
//         let arr = JSON.parse(localStorage.getItem("array"));
//         arr.push(userInfo)
//         localStorage.setItem("array", JSON.stringify(arr))
//         window.location.href = "login.html"

//     }
// }





