const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json'


async function visualizaDadosGlobais(){
    const res = await fetch(url)
    const  dados = await res.json();
    console.log(dados)
    const paragrafo = document.createElement('p')
    paragrafo.classList.add('graficos-txt')
    const container=document.getElementById('graficos-container')
}

visualizaDadosGlobais()