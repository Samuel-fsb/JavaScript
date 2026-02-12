const DadosPessoais = {
    nome: "José",
    numero: "66 6666 66666",
    rua: "Carlinhos"
};

/*let campoDesejado = "emali";*/
console.log(DadosPessoais.rua);


let campoDesejado = "email";
let usuario = { nome: "Carlos", email: "carlos@exemplo.com" };

usuario[campoDesejado] = "novo@email.com";

console.log(usuario.email);


