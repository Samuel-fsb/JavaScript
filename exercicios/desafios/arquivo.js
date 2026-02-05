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