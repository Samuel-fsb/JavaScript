const tocarMusica = (musica) => {
    let notas = ["do", "re", "mi"];
    let som = "";

    for(let i = 0; i < notas.length ;i++){

        switch(musica.toLowerCase()){
            case "do":
                notas[i] = "BOM";
            break;
                notas[i] = "DIM";
            case "re":
                notas[i] = "DAN";
            break;

            case "mi":

            break;

            default:
        }

    };

    return {}

};

console.log(tocarMusica())