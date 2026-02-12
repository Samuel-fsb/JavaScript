const DadosPessoais = {
    nome: "José",
    numero: "66 6666 66666",
    rua: "Carlinhos"
};

let campoDesejado = "emali";
console.log(DadosPessoais.rua);


let campoDesejado = "email";
let usuario = { nome: "Carlos", email: "carlos@exemplo.com" };

usuario[campoDesejado] = "novo@email.com";

console.log(usuario.email);

let carro = { marca: "Toyota", modelo: "Corola", ano: "2024"};

let chaves = Object.keys(carro);


console.log(chaves);

const estudante = { nome: "João", idade: 22, curso: "ADS"};

const ChavesDoEstudante = (Object.entries(estudante));

console.log(ChavesDoEstudante);

const precos =  {maca: 5.50, banana: 3.00, uva: 8.20};

const SoPrecos = Object.values(precos);

const SomaPrecos = SoPrecos.reduce((acumulador, atual) => acumulador + atual, 0);

console.log(SomaPrecos);

const usuarios = [
    { id: 1, nome: "Ana"},
    { id: 2, nome: "Beto"},
    { id: 3, nome: "Beto"}
];

const NovoUsuario = usuarios.find(u => u.nome == "Ana");

console.log(NovoUsuario);


let fila = ["documento_pdf", "fotos_ferias", "trabalho_escola"];

fila.push("relatório_final");

const ProcurarFoto = fila.find(f => f === "fotos_ferias");

const ArquivoRemovido = fila.pop()

console.log(fila);
console.log(ProcurarFoto);
console.log(`Arquivo removido [${ArquivoRemovido}]`);













