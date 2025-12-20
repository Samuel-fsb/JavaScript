let numeros = [5, 8, 2, 9, 3]
let t = numeros[0]


for (n = 1; n < numeros.length ;n++){
    if (numeros[n] > t){
        t = numeros[n]
    }
}
console.log(t)


let j = 1 

while(j < numeros.length){
    if(numeros[j] > t){
        t = numeros[n]
    }
    n++
}

console.log(t)


let n = 1 

do {
    if (numeros[n] > t){
        t = numeros[n]
    }
    n++
}while(n < numeros.length)
console.log(t)