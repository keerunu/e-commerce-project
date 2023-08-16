var email = document.getElementById("usuario")

document.getElementById("loginForm").addEventListener ("submit", () => {
  if (window.sessionStorage) {
    sessionStorage.setItem("usuario", email.value);
    window.location = "index.html"
  }
});

document.getElementById("loginSubmit").addEventListener("click", validateLogin);

function validateLogin () {
    let emailInput = document.getElementById("usuario");
    let passInput = document.getElementById("contrasenia");
    let emailWarning = document.getElementById("emailWarning");
    let passWarning = document.getElementById("passWarning");
    
    if (!emailInput.checkValidity()) {
        emailWarning.style.display = "block";
    } else {
        emailWarning.style.display = "none";
    }
    
    if (!passInput.checkValidity()) {
        passWarning.style.display = "block";
    } else {
        passWarning.style.display = "none";
    }
}