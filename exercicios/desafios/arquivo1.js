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

console.log(tocarMusica(["mi", "re", "do", "do"]))


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

const numbers = [1, 2, 3, 4, 5];

const numberMultiplieByTwo = numbers.map(function(number){
    return number * 2;
});

console.log(numberMultiplieByTwo);

const novaListaDeAlimentos = ["leite", "cuscuz", "carne"];

const novaLista = novaListaDeAlimentos.map(function(nova){
    return nova += "alimento ";
    
    console.log(novaLista);
    });

const ages = [9, 3, 4, 2, 5, 7, 8]

const evenAges = ages.filter(function(age){
    return age % 2 === 0;
});

console.log(evenAges);*/

const ages = [2, 34, 56, 78, 89];

const sumOfAges = ages.reduce(function(age, accumulator){
    return accumulator + age;
}, 200);

console.log(sumOfAges);