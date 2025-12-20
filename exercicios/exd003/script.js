function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano){      
        window.alert('[ERRO] verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'h')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'h-bebe.jpg')
            } else if (idade < 21){
                img.setAttribute('src', 'h-jovem.jpg')
            }else if (idade < 50){
                img.setAttribute('src', 'h-adulto.avif')
            }else {
                img.setAttribute('src', 'h-velho.jpg')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10){
                img.setAttribute('src', 'm-bebe.jpg')
            }else if (idade < 21){
                img.setAttribute('src', 'm-jovem.webp')
            }else if (idade < 50){
                img.setAttribute('src', 'm-aduta.jpeg')
            }else {
                img.setAttribute('src', 'm-velha.avif')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }

}