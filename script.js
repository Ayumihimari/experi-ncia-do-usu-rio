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
const botaoSelecionado = botaoDeAcessibilidade.getAttribute('aria-expanded') === 'true';
botaoDeAcessibilidade.setAttribute('aria-expanded', !botaoSelecionado)

https://cdnjs.cloudflare.com/ajax/libs/scrollReveal.js/4.0.9/scrollreveal.js

<script src="https://cdnjs.cloudflare.com/ajax/libs/scrollReveal.js/4.0.9/scrollreveal.js"></script>

ScrollReveal().reveal('#inicio', { delay: 500 });
ScrollReveal().reveal('#tropicalia', { delay: 500 });
ScrollReveal().reveal('#galeria', { delay: 500 });
ScrollReveal().reveal('#contato', { delay: 500 });