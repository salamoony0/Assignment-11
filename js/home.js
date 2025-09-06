window.onload = function () {
  let currentUser = JSON.parse(localStorage.getItem('currentUser'));

  if (currentUser) {
    document.getElementById("userName").innerText = "Welcome " + currentUser.name;
  } else {
    window.location.href = "signin.html";
  }
};


function logout() {
            localStorage.removeItem("currentUser");
            window.location.href = "signin.html";
}