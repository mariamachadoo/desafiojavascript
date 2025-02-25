function calcularCursos(){
    const nota1 = document.getElementById('natureza').value;
    const nota2 = document.getElementById('linguagens').value;
    const nota3 = document.getElementById('humanas').value;
    const nota4 = document.getElementById('matematica').value;
    const nota5 = document.getElementById('redacao').value;

    let media = (parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3) + parseFloat(nota4) + parseFloat(nota5)) / 5;
   
    if(media >= 750 && media < 1000){
        alert('você passou em medicina, engenharia aeronáutica, direito');
    }
    else if(media >= 600 && media<= 750){
        alert('você passou em engenharia civil, administração, psicologia');
    }
    else if(media >= 450 && media < 600){
        alert('você passou em pedagogia, letras e ciências sociais');
    }
    else{
        alert('sua nota está abaixo da nota de corte miníma');
    }
}