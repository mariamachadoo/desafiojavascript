function entrar () {
    let login = document.getElementById("username").value;
    let senha = document.getElementById("password").value;

    if (login === "" || senha === "") {
        alert("Preencha todos os campos.");
    } else if (login === "adm" && senha === "123456") {
        window.location.href = "adm.html";
    } else {
        alert("Login ou senha incorretos.");
    }
};