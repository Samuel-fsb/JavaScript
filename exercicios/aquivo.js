let res = window.document.getElementById('saida');

function botao1(){
    res.innerHTML = '<p> Você clicou no botão 1 </p>'
};

function botao2(){
    res.innerHTML = ' <p> Você clicou no botão 2 </p>'
};

function botao3(){
    res.innerHTML += ' <p> Você clicou no botão 3 </p> '
};

function botao4(){
    res.innerHTML += ' <p> Você clicou no botão 4 </p> '
};

function conversor(){
    let distancia = Number(window.prompt('Digite uma distância em metros (m)'))
    let km = distancia / 1000
    let hm = distancia / 100
    let dam = distancia / 10
    let dm = distancia * 10
    let cm = distancia * 100

    con.innerHTML = `<h2> A distância de ${distancia} metros, corresponte a...</h2> <P> ${km} Quilômetros (Km) <br> ${hm} Hectômetro (Hm) <br> ${dam} Decâmetros (Dam) <br> ${dm} Decímtros (dm) <br> ${cm} Centrímetros (cm)                                                       `
}