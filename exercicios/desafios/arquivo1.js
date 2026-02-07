const tocarMusica = (musica) => {
    
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

console.log(tocarMusica(["mi", "re", "do", "do"]))