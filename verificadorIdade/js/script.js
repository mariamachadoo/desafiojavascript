function verificar () {
    let idade = document.getElementById("idade").value;
    let tipo = document.getElementById("tipo");

    if (idade === "" || idade < 0) {
        tipo.textContent = "Digite uma idade válida!";
    } else if (idade <= 12) {
        tipo.textContent = "Você é Criança";
    } else if (idade <= 18) {
        tipo.textContent = "Você é Adolescente";
    } else if (idade <= 59) {
        tipo.textContent = "Você é Adulto";
    } else {
        tipo.textContent = "Você é Idoso";
    }
}