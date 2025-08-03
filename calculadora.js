var botoes = ["7","8","9","/","4","5","6","x","1","2","3","+","0","C","=","-"],numeros = ["1","2","3","4","5","6","7","8","9","0"];
var caracterEspecial = false;


function criar() {
    colocarBotoes();
}
function colocarBotoes() {
    for (let i = 0;i < botoes.length;i++) {
        if (numeros.includes(botoes[i])) {
            document.getElementById("botoes").innerHTML += "<div onclick='adicionar("+botoes[i]+")' class='tecla'><p>"+botoes[i]+"</p></div>";
        }
        else {
            document.getElementById("botoes").innerHTML += "<div onclick='adicionar("+(i+10)+")' class='tecla'><p>"+botoes[i]+"</p></div>"
        }
    }
}


function adicionar(numero) {
    let conta = document.getElementById("telinha").innerHTML;
    conta = conta.split(" ");
    if ((conta.length != 3 || (conta[2] == "" || conta[2] == undefined)) && numero == 24) {
        return false;
    }
    else if (numero > 10 && conta[0] == "" && numero != 23) {
        return false;
    }
    else if (caracterEspecial && numero > 10 && numero != 23 && numero != 24) {
        return false;
    }
    
    if (numero == 13) {
        document.getElementById("telinha").innerHTML += " / ";
        caracterEspecial = true;
    }
    else if (numero == 17) {
        document.getElementById("telinha").innerHTML += " x ";
        caracterEspecial = true;
    }
    else if (numero == 21) {
        document.getElementById("telinha").innerHTML += " + ";
        caracterEspecial = true;
    }
    else if (numero == 25) {
        document.getElementById("telinha").innerHTML += " - ";
        caracterEspecial = true;
    }
    else if (numero == 24) {
        mostraResultado();
    }
    else if (numero == 23) {
        document.getElementById("telinha").innerHTML = "";
        caracterEspecial = false;
    }
    else {
        document.getElementById("telinha").innerHTML += numero;
    }
}

function mostraResultado() {
    let tela = document.getElementById("telinha").innerHTML,resultado;
    tela = tela.split(" ");
    tela[0] = parseInt(tela[0]);
    tela[2] = parseInt(tela[2]);

    if (tela[1] == "/") {
        resultado = tela[0] / tela[2];
    }
    else if (tela[1] == "x") {
        resultado = tela[0] * tela[2];
    }
    else if (tela[1] == "+") {
        resultado = tela[0] + tela[2];
    }
    else if (tela[1] == "-") {
        resultado = tela[0] - tela[2];
    }
    document.getElementById("telinha").innerHTML = resultado;
    caracterEspecial = false;
}