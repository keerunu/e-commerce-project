document.getElementById("cerrarSesion").addEventListener ("click", () => {
    window.location = "login.html"
});

document.addEventListener("DOMContentLoaded", function() {
    var usuario = localStorage.getItem("usuario");

    if (usuario === null) {
        window.location = "login.html"
    }

    document.getElementById("autos").addEventListener("click", function() {
        localStorage.setItem("catID", 101);
        window.location = "products.html"
    });
    document.getElementById("juguetes").addEventListener("click", function() {
        localStorage.setItem("catID", 102);
        window.location = "products.html"
    });
    document.getElementById("muebles").addEventListener("click", function() {
        localStorage.setItem("catID", 103);
        window.location = "products.html"
    });
});