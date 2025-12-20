function carregar () {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if(hora >= 0 && hora < 12){
        img.src = '1.png'
        document.body.style.background = '#fdfeb0'
    } else if(hora >= 12 && hora < 18) {
        img.src = '3.png'
        document.body.style.background = '#546375'
    } else {
        img.src = '2.png'
        document.body.style.background = '#2e3b4b'
    }
}