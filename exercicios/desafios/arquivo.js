const calculartotal = (valorbase) => {
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
        console.log(valordodesconto(200))






