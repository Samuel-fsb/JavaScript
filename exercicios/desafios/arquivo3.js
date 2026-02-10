const produtos = [
    { nome: "mouse", preco: 50, categoria: "Periférico"},
    { nome: "monitor", preco: 800, categoria: "Hardware"},
    { nome: "teclado", preco: 120, categoria: "Periférico"},
    { nome: "cabo HDMI", preco: 30, categoria: "Acessório"}
];

const produtosMaisCem = produtos.filter(produto => produto.preco >= 100)
                                .map(produto => `O ${produto.nome} custa ${produto.preco}`)

console.log(produtosMaisCem);


const SomaProdutos = produtos.filter(produto => produto.preco >= 100)
                                .reduce((acumulador, atual) => {return acumulador + atual.preco}, 0)

console.log(`A soma de todos os protudos maiores ou iguais a cem reais é de: ${SomaProdutos}`);