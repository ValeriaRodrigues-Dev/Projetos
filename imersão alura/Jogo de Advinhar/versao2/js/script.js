
function boas_vindas() {
    var nomeuser = document.getElementById('nomuser').value; //VALUE(CAPTA O VALOR DIGITADO)
    //  CAPTA OS DADOS DO HTML E OS INSERE NA VARIAVEL 

    // CAPTA OS DADOS DO HTML E OS INSERE NA VARIAVEL PARA A MENSAGEM SER EXIBIDA AO USUARIO 
    var msguser = document.getElementById('msgaouser');
    
    // Converte o input do usuário para um número
    var valornome= parseInt(nomeuser);
    var result = isNaN(nomeuser);

    result ? msguser.innerHTML = `BEM VINDO(A) ${nomeuser.toUpperCase()} , SÂO 7 TENTATIVAS! BOM JOGO E BOA SORTE!!` 
    : msguser.innerHTML = 'NÃO DIGITE NÚMEROS';

    // Verifica se o input não é um número
    // if (result == false) {
    //     msguser.innerHTML = 'NÃO DIGITE NÚMEROS';
    //     // Limpa o campo de input
    //    msguser = document.getElementById('nomeuser').value = '';
    // } else {
    //     msguser.innerHTML = `BEM VINDO(A) ${nomeuser.toUpperCase()} , SÂO 7 TENTATIVAS! BOM JOGO E BOA SORTE!!`;
    //     document.getElementById('nomeuser').value = '';
    // }
}

// definindo as variaveis fora da funcao pois nao quero que o estado delas(valores) sejam resetados com o loop
//a funcao Math.random() gera um numero aleatorio, * 100 ate tal numero e o +1 exclui o 0 tirando o inclui 
var numaleatorio = parseInt(Math.random() * 100) + 1;
//para exibir as mensagens pedidas ao usuario
var retornouser = document.getElementById('msgsaida');
//tentativas para incrementar
var contartentativas = 8;
/*array para receber os numeros ja digitados pelo usuario, tambem fora da funcao para que os numeros sejam 
   inseridos simultaneamente, sem apagar o anteriores */
var numchutados = [];
// const botaochutar = document.getElementById('botaochute');

function tentandoadivinhar() {
    var numerouser = document.getElementById('numuser').value;

    //comdicoes para meu jogo rodar corretamente se atender cai no else 
    numerouser = parseInt(numerouser); //transforma o valor captado do usuario em numero inteiro
    //a funcao isNaN()  uma função JavaScript que verifica se o valor passado para ela não é um valor numérico válido.
    if (isNaN(numerouser) || numerouser < 1 || numerouser > 100) {
        retornouser.innerHTML = `NÚMERO INVÁLIDO!! DIGITE DE ACORDO COM O PEDIDO!`;
    } else {

        var insertnum = document.getElementById("numdigitados")
        //aqui vai entrar os numeros chutados no array atraves da funcao push()
        numchutados.push(numerouser);
        insertnum.innerHTML = `NÚMEROS INSERIDOS ATÉ ENTÃO: ${numchutados}`;
        //concatena assim or "NUMEROS INSERIDOS ATE ENTAO: " + numchutados;


       // quero que o novo numero inserido na nova tentativa seja comparado com os numeros 
       //ja estao no array e se for repetido, exibir uma msg de erro e solicitar que digite novamente


        //mostra ao usuario as tentativas atualizadas
        var numtentativas = document.getElementById('numtenta');
        numtentativas.innerHTML = "TENTATIVA: " + contartentativas;

        //condicoes para o laco seguir corretamente
        if (contartentativas > 0) {
            contartentativas--;

            if (numaleatorio == numerouser) {
                console.log("passou a primeira" + contartentativas)
                retornouser.innerHTML = "VOCÊ ACERTOUU O CHUTE!! PARABÉNS!";
            }
            else if (numaleatorio > numerouser) {
                console.log("passou a segunda cond" + contartentativas)
                retornouser.innerHTML = "O NÚMERO A SER ACERTADO É MAIOR QUE O CHUTADO!";

            }
            else if (numaleatorio < numerouser) {
                console.log("passou a terceira cond" + contartentativas)
                retornouser.innerHTML = "O NÚMERO A SER ACERTADO É MENOR QUE O CHUTADO!";
            }
            if (contartentativas == 0) {
                console.log("passou a ultima cond" + contartentativas)
                return retornouser.innerHTML = "TENTATIVAS ESGOTADAS! PERDEU! O NÚMERO ERA: " + numaleatorio;
            }
        }
    }
}
