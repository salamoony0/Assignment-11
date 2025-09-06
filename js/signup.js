let nameInput = document.getElementById('nameInput');
let emailInput = document.getElementById('emailInput');
let passwordInput = document.getElementById('passwordInput')

var users = [ ];
if(localStorage.getItem('usersList') != null) {
    users = JSON.parse(localStorage.getItem('usersList'));
    console.log(users);
}

// function createUser ( ) {
//     if ( validateName() && validateEmail() && validatePassword()  ) {
//    if ( validateRegisteredEmail() ) {
//     successMsg.classList.remove('d-none')
//     registered.classList.add('d-none');
//     failMsg.classList.add('d-none');

//        }
//        else {
//          registered.classList.remove('d-none');
//         emailInput.classList.remove('is-valid');
//         emailInput.classList.add('is-invalid');
//         successMsg.classList.add('d-none');
        
//         return;
//        }

//        var user = {
//         name : nameInput.value,
//         email : emailInput.value,
//         password : passwordInput.value
//      }
// users.push(user);
//      localStorage.setItem('usersList' , JSON.stringify(users))
//      console.log(users);
    
//     }
    
   
// }



function validateName ( ) {
var regex = /^[A-Za-z]{2,}(?:\s[A-Za-z]{2,})?$/;
    var alertMsg = document.getElementById('alertMsg');
     if (nameInput.value === "") {
    nameInput.classList.remove('is-valid', 'is-invalid');
    alertMsg.classList.add('d-none');
    return false;
  }
    if (regex.test(nameInput.value)) {
        nameInput.classList.remove('is-invalid');
        nameInput.classList.add('is-valid');
        alertMsg.classList.add('d-none');
        return true;
    } else {
        nameInput.classList.remove('is-valid');
        nameInput.classList.add('is-invalid');
        alertMsg.classList.remove('d-none');
        return false;
    }
}
function validateEmail ( ) {

    var regex = /^[\w.-]+@([\w-]+\.)+[\w-]{2,4}$/;
    var alertMsg2 = document.getElementById('alertMsg2');
         if (emailInput.value === "") {
    emailInput.classList.remove('is-valid', 'is-invalid');
    alertMsg2.classList.add('d-none');
    return false;
  }
    if (regex.test(emailInput.value)) {
        emailInput.classList.remove('is-invalid');
        emailInput.classList.add('is-valid');
        alertMsg2.classList.add('d-none');
        return true;
    } else {
        emailInput.classList.remove('is-valid');
        emailInput.classList.add('is-invalid');
        alertMsg2.classList.remove('d-none');
        return false;
    }
    
}
function validateRegisteredEmail() {
    let users = JSON.parse(localStorage.getItem('usersList')) || [];
    let emailInputt = emailInput.value.toLowerCase();

    let exists = users.some(user => user.email.toLowerCase() === emailInputt);

    if (exists) {
       
        return false;
        
    }
    else {


return true;
    }
    
}

function validatePassword ( ) {
     var regex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/
        var alertMsg3 = document.getElementById('alertMsg3');
         if (passwordInput.value === "") {
    passwordInput.classList.remove('is-valid', 'is-invalid');
    alertMsg3.classList.add('d-none');
    return false;
  }
    if (regex.test(passwordInput.value)) {
        passwordInput.classList.remove('is-invalid');
        passwordInput.classList.add('is-valid');
        alertMsg3.classList.add('d-none');
        return true;
    } else {
        passwordInput.classList.remove('is-valid');
        passwordInput.classList.add('is-invalid');
        alertMsg3.classList.remove('d-none');
        return false;
    }
}

document.getElementById("signUpBtn").addEventListener("click", function () {
  if (validateName() && validateEmail() && validatePassword()) {
    if (validateRegisteredEmail()) {
      successMsg.classList.remove("d-none");
      registered.classList.add("d-none");
      failMsg.classList.add("d-none");

      
      var user = {
        name: nameInput.value,
        email: emailInput.value,
        password: passwordInput.value
      };

      users.push(user);
      localStorage.setItem("usersList", JSON.stringify(users));
      console.log(users);
    } else {
      
      registered.classList.remove("d-none");
      emailInput.classList.remove("is-valid");
      emailInput.classList.add("is-invalid");
      successMsg.classList.add("d-none");
    }
  } else {
    
    failMsg.classList.remove("d-none");
  }
});


