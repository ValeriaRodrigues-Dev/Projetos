alert(`BEM VINDO(A) AO MEU HUMILDE JOGO DE ADVINHAR \n >> DIVIRTA - SE E BOA SORTE! <<`);

var numaleatorio = parseInt(Math.random() * 100) + 1;
var tentativas = 1;

while (tentativas <= 5) {
    var chute = prompt('Digite um numero entre 1 e 100: ');

    if (chute == numaleatorio) {
        alert("ACERTOU!!!!!!!!!!!!! \n NA TENTATIVA: " + tentativas);

    } else if (chute > numaleatorio) {
        alert("ERROU! TENTE NOVAMENTE \n DICA: O NUMERO E MENOR QUE O DIGITADO \n TENTATIVA: " + tentativas);

    } else if (chute < numaleatorio) {
        alert("ERROU! TENTE NOVAMENTE \n DICA: O NUMERO E MAIOR QUE O DIGITADO \n TENTATIVA: " + tentativas);
    }
    tentativas++;
}
if (tentativas == 5) {
    alert(`PERDESTE!! \n O NUMERO ERA: ${numaleatorio}`);
}