let novousuario = "";
let novoemail = "";
let novasenha = "";


//mostrando para javascript o botão de cadastro

//todos os botões
var btCadastro = document.getElementById('se_cadastrar');
var btLogin = document.getElementById('btLogin');
var btlogar = document.getElementById('logar');
var btCadastrar = document.getElementById("Cadastro")
var btenviar = document.getElementById("enviar")
//todas as telas
var telacadastro = document.getElementById('cadastro');
var telalogin = document.getElementById('login');
var telaquiz = document.getElementById('quiz');




btCadastro.addEventListener('click', function () {
    telacadastro.style.display = 'flex';
    telalogin.style.display = 'none';
});

btLogin.addEventListener('click', function () {
    telalogin.style.display = 'flex';
    telacadastro.style.display = 'none';
});

btlogar.addEventListener('click', function () {
    var inputLogarEmail = document.getElementById('email_log')
    var inputlogarSenha = document.getElementById('pwd_log')
    
    if (novoemail == '') {
        return alert('Você precisa digitar seu Email!')
    } else if (novasenha == '') {
        return alert('Você precisa digitar seu Senha!')
    } else if (inputLogarEmail.value == novoemail && inputlogarSenha.value == novasenha) {
        alert('Seja bem vindo ao Quiz')
        telalogin.style.display = 'none';
        telaquiz.style.display = 'flex';
    }
  
});

btCadastrar.addEventListener('click', function () {
    //capturar campos
    var inputEmail = document.getElementById('email_cad');
    var inputSenha = document.getElementById('pwd_cad');
    var inputNome = document.getElementById('usr_cad');

    novousuario = inputNome.value
    novoemail = inputEmail.value
    novasenha = inputSenha.value

    if (novousuario == '') {
        return alert('Você precisa digitar seu Nome!')
    } else if (novoemail == '') {
        return alert('Você precisa digitar seu Email!')
    } else if (novasenha == '') {
        return alert('Você precisa digitar seu Senha!')
    } else {
        alert(novousuario + " você acabou de se cadastrar")
    }

});

btenviar.addEventListener('click', function () {

    var respostas = ['1', '2', '3', '2', '1']
    var pontuacao = 0

    var pergunta1 = document.querySelector('input[name="pergunta1"]:checked')
    var pergunta2 = document.querySelector('input[name="pergunta2"]:checked')
    var pergunta3 = document.querySelector('input[name="pergunta3"]:checked')
    var pergunta4 = document.querySelector('input[name="pergunta4"]:checked')
    var pergunta5 = document.querySelector('input[name="pergunta5"]:checked')

    if (pergunta1.value == respostas[0]) {
        pontuacao = pontuacao + 2
    }
    if (pergunta2.value == respostas[1]) {
        pontuacao = pontuacao + 2
    }
    if (pergunta3.value == respostas[2]) {
        pontuacao = pontuacao + 2
    }
    if (pergunta4.value == respostas[3]) {
        pontuacao = pontuacao + 2
    }
    if (pergunta5.value == respostas[4]) {
        pontuacao = pontuacao + 2
    } 
    if(pontuacao >= 8) {
        alert(novousuario +" " + "Parabéns você acertou: " + pontuacao +" de 10 Pontos!")
        telalogin.style.display = 'flex';
        telaquiz.style.display = 'none';
    }else{
        alert(novousuario +" " + "parabéns por tentar, mas a sua pontuação foi menor que 8" )
        telalogin.style.display = 'flex';
        telaquiz.style.display = 'none';
    }
});























































































