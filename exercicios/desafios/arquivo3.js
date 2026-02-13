const produtos = [
    { nome: "mouse", preco: 50, categoria: "Periférico"},
    { nome: "monitor", preco: 800, categoria: "Hardware"},
    { nome: "teclado", preco: 120, categoria: "Periférico"},
    { nome: "cabo HDMI", preco: 30, categoria: "Acessório"}
];

const produtosMaisCem = produtos.filter(produto => produto.preco >= 100)
                                .map(produto => `O ${produto.nome} custa ${produto.preco}`)

const SomaProdutos = produtos.filter(produto => produto.preco >= 100)
                                .reduce((acumulador, atual) => {return acumulador + atual.preco}, 0)

console.log(produtosMaisCem);

console.log(`A soma de todos os protudos maiores ou iguais a cem reais é de: ${SomaProdutos}`);



/*const produtosMaisCem = produtos.filter(produto => produto.preco >= 100)
                                .reduce((acumulador, atual) => {return acumulador + atual.preco}, 0)
                                .map(produto => `O ${produto.nome} custa ${produto.preco}`)

console.log(produtosMaisCem);

const SomaProdutos = produtos.filter(produto => produto.preco >= 100)
.reduce((acumulador, atual) => {return acumulador + atual.preco}, 0)

console.log(`A soma de todos os produtos maiores ou iguais a 100 reais é de: ${SomaProdutos}`);


const GerarRelatório = listaDeProdutos => {

    const filtrados = listaDeProdutos.filter(f => f.preco >= 100)
    
    const frases = filtrados.map(`produto => O ${produto.nome} custa ${produto.preco}`)

};

console.log(filtrados);


const convidados = ["Carlos", "vip", "Mariana", "vip", "José"];

const convidadosVIP = convidados.forEach(nome => {
    if (nome === "vip"){
        console.log(nome.toUpperCase());
    } else {
        console.log(nome);
    };
});

console.log(convidadosVIP);*/