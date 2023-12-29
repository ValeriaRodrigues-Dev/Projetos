
function boas_vindas(){
    // CAPTA OS DADOS DO HTML E OS INSERE NA VARIAVEL
    var nomeuser = document.getElementById('nomuser').value; //VALUE(CAPTA O VALOR DIGITADO)
    // MESMA COISA DA ANTERIOR MAS PARA A MENSAGEM SER EXIBIDA AO USUARIO 
    var msgboasvindas = document.getElementById('msgboasvindas');
    if(nomeuser == ""){
        nomeuser = "ANÔNIMO";
    } else {
        nomeuser = nomeuser;
    }

 msgboasvindas.innerHTML= `BEM VINDO(A) ${nomeuser.toUpperCase()} , SÂO 7 TENTATIVAS! BOM JOGO E BOA SORTE!!`;
//  A FUNCAO toUpperCase() TRANSFORMA AS LETARS EM MAIUSCULAS SEU CONTRARIO E toLowerCase()
}

// definindo as variaveis fora da funcao pois nao quero que o estado delas(valores) sejam resetados com o loop
//a funcao Math.random() gera um numero aleatorio, * 100 ate tal numero e o +1 exclui o 0 tirando o inclui 
    var numaleatorio = parseInt (Math.random() * 100) + 1; 
    //para exibir as mensagens pedidas ao usuario
    var retornouser = document.getElementById('msgsaida');
    //tentativas para incrementar
    var contartentativas = 1;
  /*array para receber os numeros ja digitados pelo usuario, tambem fora da funcao para que os numeros sejam 
     inseridos simultaneamente, sem apagar o anteriores */
    var numchutados= [];
    const botaochutar = document.getElementById('botaochute');

function tentandoadivinhar(){
    var numerouser = document.getElementById('numuser').value;
    
    //comdicoes para meu jogo rodar corretamente se atender cai no else 
    numerouser = parseInt(numerouser); //transforma o valor captado do usuario em numero inteiro
    //a funcao isNaN()  uma função JavaScript que verifica se o valor passado para ela não é um valor numérico válido.
    if(isNaN(numerouser)|| numerouser < 1 || numerouser > 100){
        retornouser.innerHTML= `NÚMERO INVÁLIDO!! DIGITE DE ACORDO COM O PEDIDO!`;
    }else{

        var insertnum = document.getElementById("numdigitados")
        //aqui vai entrar os numeros chutados no array atraves da funcao push()
        numchutados.push(numerouser);
        insertnum.innerHTML = `NÚMEROS INSERIDOS ATÉ ENTÃO: ${numchutados}`;
         //concatena assim or "NUMEROS INSERIDOS ATE ENTAO: " + numchutados;
        
         //mostra ao usuario as tentativas atualizadas
        var numtentativas = document.getElementById('numtenta');
        numtentativas.innerHTML = "TENTATIVA: " + contartentativas;
       
        //condicoes para o laco seguir corretamente
        while(contartentativas < 7 ){
            contartentativas++;

            if(numaleatorio ==  numerouser){
                retornouser.innerHTML="VOCÊ ACERTOUU O CHUTE!! PARABÉNS!";
            }  
            else if(numaleatorio > numerouser){
                retornouser.innerHTML= "O NÚMERO A SER ACERTADO É MAIOR QUE O CHUTADO!";
                
            }
            else if(numaleatorio < numerouser){
                retornouser.innerHTML= "O NÚMERO A SER ACERTADO É MENOR QUE O CHUTADO!";
            }
            if(contartentativas == 7){
                return retornouser.innerHTML= "TENTATIVAS ESGOTADAS! PERDEU! O NÚMERO ERA: " + numaleatorio;
            }
            const botaochutar = document.getElementById('botaochute');
            console.log(botaochutar);
            botaochutar.Disabled = true;
           break;
            

        }
    }
}
