/*const calculartotal = (valorbase) => {
            let valorfinal;        

            if (valorbase >= 500){
                valorfinal = valorbase * 0.85;
            } else if (valorbase >= 200 && valorbase <= 499.99){
                valorfinal = valorbase * 0.90;
            } else { 
                valorfinal = valorbase;
            }

            return valorfinal;
            
        };

        console.log(calculartotal(700))
        console.log(calculartotal(300))
        console.log(calculartotal(150))




        const valordodesconto = (valor) => {
            
            let novovalor;

            if (valor >= 500){
                novovalor = valor * 0.85;
            } else if (valor >= 200 && valor <= 499.99){
                novovalor = valor * 0.90;
            } else {
                novovalor = valor;
            }

            return novovalor;
        };

        console.log(valordodesconto(300))
        console.log(valordodesconto(200))*/

const processarvenda = (valordavenda, categoria) => {

    let comissao = 0;
    let status = "";

    switch (categoria){
        case "eletronico":
            comissao = valordavenda * 0.10;
            status = "Venda de alta prioridade";
        break;

        case "vestuario":
            comissao = valordavenda * 0.05;
            status = "Venda padrão";
        break;

        case "alimento":
            comissao = valordavenda * 0.02;
            status = "venda de giro rápido";
        break;

        default:
            comissao = 0;
            status = "Categoria não categorizada";
    }
        
    return{
        comissao: comissao,
        status: status
    };
};

console.log(processarvenda(0, "vestuario"))



