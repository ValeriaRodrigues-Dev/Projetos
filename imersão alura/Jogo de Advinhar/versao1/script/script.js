
var nomedig = "";

var nomeuser = prompt("DIGITE SEU NOME: ")
if (nomeuser === '') {
    nomedig = "ANONIMO";
} else {
    nomedig = nomeuser;
}
alert(`BEM VINDO(A) ${nomedig.toUpperCase()} \nESSE E MEU HUMILDE JOGO DE ADVINHAR \n >> DIVIRTA - SE E BOA SORTE! <<`);

var numaleatorio = parseInt(Math.random() * 100) + 1;
var tentativas = 7;
var numdigitados = [];

while (tentativas > 0) {

    var chute = prompt('Digite um numero entre 1 e 100: ');
    if (chute === null){
        break;
    }

    chute = parseInt(chute);

   if (isNaN(chute) || chute < 1 || chute > 100){
     alert( "NUMERO INVALIDO!! \n DIGITE DE ACORDO COM O PEDIDO");
      continue;
   }

    tentativas--;

    if (chute == numaleatorio) {
        alert("ACERTOU!!!!!!!!!!!!! \n NA TENTATIVA: " + tentativas);

    }
    else if (chute > numaleatorio) {
        alert("ERROU! TENTE NOVAMENTE \n DICA: O NUMERO E MENOR QUE O DIGITADO \n DTENTATIVA: " + tentativas);   
        numdigitados.push(chute);
        alert("NUEMROS DIGITADOS ATE ENTAO: "+ numdigitados)
    }
    else if (chute < numaleatorio) {
        alert("ERROU! TENTE NOVAMENTE \n DICA: O NUMERO E MAIOR QUE O DIGITADO \n TENTATIVA: " + tentativas);
        numdigitados.push(chute);
        alert("NUEMROS DIGITADOS ATE ENTAO: "+ numdigitados)
    }


    if (tentativas == 0) {
        alert(`PERDEUUU !!! \n O NUMERO A SER ADIVINHADO ERA: ${numaleatorio}`);
    }
}

