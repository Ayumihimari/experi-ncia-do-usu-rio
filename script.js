const botaoDeAcessibilidade = document.getElementById('botao-acessibilidade')
const opcoesDeAcessibilidade = document.getElementById('opcoes-acessibilidade')

botaoDeAcessibilidade.addEventListener('click', function (){
    botaoDeAcessibilidade.classList.toggle('rotacao-botao');
    opcoesDeAcessibilidade.classList.toggle('apresenta-lista')
   })
   const alternaContraste = document.getElementById('alterna-contraste')

   alternaContraste.addEventListener('click', function(){
    document.body.classList.toggle('alto-contraste')
})