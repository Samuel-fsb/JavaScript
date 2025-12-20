var a = document.querySelector('div#area')
        a.addEventListener('click', clicar)
        a.addEventListener('mouseout', saiu)
        a.addEventListener('mouseenter', entrou)

        function clicar() {
            a.innerHTML = 'Você clicou em mim!'
            a.style.background = 'red'
        }
        function saiu(){
            a.innerHTML = 'Você tirou o mouse de mim!'
            a.style.background = 'black'
        }
        function entrou() {
            a.innerHTML = 'Você entrou em mim (Aí Dento)'
            a.style.background = 'pink'
        }