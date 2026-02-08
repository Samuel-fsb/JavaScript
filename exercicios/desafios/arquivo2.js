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