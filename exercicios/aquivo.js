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

let converter = window.document.getElementById('con')

function conversor(){
    let distancia = Number(window.prompt('Digite uma distância em metros (m)'))
    let km = distancia / 1000
    let hm = distancia / 100
    let dam = distancia / 10
    let dm = distancia * 10
    let cm = distancia * 100
    let mm = distancia * 1000

    converter.innerHTML += `<h2> A distância de ${distancia} metros, corresponte a...</h2> <P> ${km.toLocaleString('pt-BR')} Quilômetros (Km) <br> ${hm.toLocaleString('pt-BR')} Hectômetro (Hm) <br> ${dam.toLocaleString('pt-BR')} Decâmetros (Dam) <br> ${dm.toLocaleString('pt-BR')} Decímtros (dm) <br> ${cm.toLocaleString('pt-BR')} Centrímetros (cm) <br> ${mm.toLocaleString('pt-BR')} Milímetros (mm)</p>                                                    `
}