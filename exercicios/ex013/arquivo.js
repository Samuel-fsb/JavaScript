let nota = ['Excelente', 'Bom', 'Regular', 'Reprovado']
let v = [0]

if (nota >= 9 && nota <=10){
    console.log(nota[v])
}else if(nota >= 7){
    console.log('Bom')
}else if (nota >= 5){
    console.log('Regular')
}else if(nota >= 0){
    console.log('Reprovado!')
}else{
    console.log('Nota iválida')
}