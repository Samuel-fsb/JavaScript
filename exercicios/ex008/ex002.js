var agora = new Date()
var hora = agora.getHours()//use esse comando para pegar as horas exatas e jogue essa nova variável dentro da antiga.Esse comando vai pegar a hora do servidor ou da máquina que você está usando.
console.log(`O seu horário atual é ${hora}`)
if (hora >= 1 && hora <= 11) {
    console.log('bom dia!')
} else if (hora >= 12 && hora < 18){
    console.log('Boa tarde!')
} else {
    console.log('Boa noite! E vá pra casa jacaré!')
}