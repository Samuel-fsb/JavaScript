/*
const users = [
    { name: 'Rodolfo', age: 33, contact: '(12) 32234-3456' },
    { name: 'Paulo', age: 21, contact: '(23) 90887-4576' },
    { name: 'Aline', age: 40, contact: '(45) 98765-0943' },
    { name: 'Maria', age: 12, contact: '(87) 97609-4576' },
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
*/

const numeros = [2, 4, 5, 6, 8, 9];

const numerosSomados = numeros.map(s => {
    const soma = s * 2;
    return soma;
});

console.log(numerosSomados);