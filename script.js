document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var username = document.forms["login-form"]["username"].value;
    var password = document.forms["login-form"]["password"].value;

    if (username === "admin" && password === "admin123") {
        window.location.href = "https://www.refseek.com/";
    } else {
        alert("Usuário ou senha incorretos!");
    }
});
