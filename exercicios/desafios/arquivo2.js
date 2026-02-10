
const users = [
    { name: 'Rodolfo', age: 33, contact: '(12) 32234-3456' },
    { name: 'Paulo', age: 21, contact: '(23) 90887-4576' },
    { name: 'Aline', age: 40, contact: '(45) 98765-0943' },
    { name: 'Maria', age: 12, contact: '(87) 97609-4576' }
];
users.forEach(usuarios = (item, index, array) => {
    console.log(item);
    console.log(index);
    console.log(array);
});
users.forEach(cliente = (item, index) => {
    if(item.age < 18){
        console.log(`O cliente ${item.name}, posição ${index} é menor de idade.`)
    };
});

const numeros = [2, 4, 5, 6, 8, 9];

const numerosSomados = numeros.map(s => {
    const soma = s * 2;
    return soma;
});

console.log(numerosSomados);

const precos = [10 , 25, 50];

const NovosPrecos = precos.map(cifrao => `R$ ${cifrao}`);

console.log(NovosPrecos);


const Menores = idades.filter(function(menor){
    const M = menor >= 18;
    return M;
});

const idades = [12, 23, 14, 34, 17];

const Maiores = idades.filter(menor => menor >= 18);

console.log(Maiores);

const missoesXP = [150, 50, 300, 200];

const TotalXP = missoesXP.reduce((acumulador, atual) => {
    return acumulador + atual;
}, 50);


console.log(TotalXP);

const notas = [4, 8, 5, 10, 7];

const notasM7 = notas.filter(n => n >= 7)
.map(n => `Aprovado com ${n}`)

const TotalAprovados = notasM7.reduce(acumulador => acumulador + 1, 0);

console.log(notasM7);
console.log(`O total de aprovados é ${TotalAprovados}!`);


const pizzas = [
    "mussarela",
    "calabreza",
    "portuguesa",
    "marguerita"
];

const FoundPizza = pizzas.find( p => p.startsWith("p"));

console.log( FoundPizza );

const fruits = [
    { name: "jaca", quantity: 2 },
    { name: "banana", quanitty: 0 },
    { name: "cereja", quantity: 5 }
];

const foundFruit = fruits.find( fruit => fruit.name === "banana");


console.log(foundFruit);


const numero = [1, 3, 5, 6, 7];


console.log(numero);
console.log(numero.push(532))
console.log(numero)
console.log(numero.pop())
console.log(numero)