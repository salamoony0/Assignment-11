function loginUser() {
  let users = JSON.parse(localStorage.getItem('usersList')) || [];
  let email = emailInput.value.toLowerCase();
  let password = passwordInput.value;

  if (email === "" || password === "") {
    emptyy.classList.remove('d-none');
    failedd.classList.add('d-none');
    return; 
  }
  let foundUser = users.find(user => user.email.toLowerCase() === email && user.password === password);
if (foundUser) {
  //  

    localStorage.setItem("currentUser", JSON.stringify(foundUser));
    window.location.href = "home.html";
  } else {
    failedd.classList.remove('d-none');
    emptyy.classList.add('d-none'); 
  }
}
