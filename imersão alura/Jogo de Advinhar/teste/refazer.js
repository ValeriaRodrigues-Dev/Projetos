function voltar(stage) {
    if (stage == 1) {
        var containervolta = document.getElementById('one')
        var stage_name = document.getElementById('two')

        containervolta.classList.remove('esconde');
        stage_name.classList.add('esconde');
    }
}

function avancar(stage) {
    if (stage == 1) {
        var container = document.getElementById('start');
        var stage_one = document.getElementById('one');

        container.classList.add('esconde');
        stage_one.classList.remove('esconde');

        setTimeout(function () {
            stage_one.classList.add('esconde');
            avancar(2);
        }, 15000)
    }
    else if (stage == 2) {
        var container2 = document.getElementById('one');
        var stage_two = document.getElementById('two')

        container2.classList.add('esconde');
        stage_two.classList.remove('esconde');
    }
    else if (stage == 3) {
        var container3 = document.getElementById('two');
        var stage_tree = document.getElementById('tree')

        container3.classList.add('esconde');
        stage_tree.classList.remove('esconde');
    } 
}

function boas_vindas() {
    var botaoproxnome = document.getElementById('disabledprox');
    var nomeusuario = document.getElementById('inputnomedouser').value;
    var msgnome = document.getElementById('msgheader');

    var nomeuser = !isNaN(nomeusuario);

    if (nomeusuario === "") {
        msgnome.innerHTML = "NÃO DEIXE O CAMPO VAZIO";
    } else if (nomeuser) {
        msgnome.innerHTML = "NÃO DIGITE APENAS NÚMEROS";

    } else {
        msgnome.innerHTML = `SEJA BEM VINDO(A) ${nomeusuario},TENHA UM BOM JOGO!!`;
        botaoproxnome.disabled = false;
    }
}