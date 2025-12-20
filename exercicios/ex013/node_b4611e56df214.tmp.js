let valores = [10, 15, 3, 8, 20]
let c = valores[0]

/*
for (let i = 1; i < valores.length ;i++){
    if(valores[i] < c){
        c = valores[i]
    }
}
console.log(c)
*/

let i = 1
while (i < valores.length){
    if(valores[i] < c){
        c =valores[i]
    }
}
console.log(c)