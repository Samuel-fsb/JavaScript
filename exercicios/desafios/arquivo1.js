/*const tocarMusica = (musica) => {
    
    let som = "";

    for(let i = 0; i < musica.length ;i++){

        switch(musica[i].toLowerCase()){
            case "do":
                som += "BOM ";
                break;

            case "re":
                som += "DIM ";
                break;
                
            case "mi":
                som += "DAN ";
                break;

            default:
                som += "? ";
        };

    };

    return { som };

};

console.log(tocarMusica(["mi", "re", "do", "do"]))*/


const localizarItens = (localizar) => {

    let itens = "";

    for(let i = 0; i < localizar.length ;i++){

        switch (localizar[i].toLowerCase()){
            case "leite":
            case "queijo":
                itens += "frios ";
                break;

            case "pao":
                itens += "padaria ";
                break;

            case "shampoo":
                itens += "Higiene ";
                break;

            default:
                itens += "Protuto não encontrado";
        };

    };

    return { itens };
};

console.log(localizarItens(["leite", "queijo", "pao", "cafe"]))







