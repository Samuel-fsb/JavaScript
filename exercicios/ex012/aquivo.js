let num = [5, 6, 7, 8]
num.sort()
num.push(1)
console.log(num)
console.log(`O primeiro valor do vetor é ${num[0]}`)
console.log(`O vetor tem ${num.length} posições`)
let pos = num.indexOf(4)
if (pos == -1){
    console.log(`O valor não foi encontrado!`)
}else{
    console.log(`O valor 8 está no posição ${pos}`)
}