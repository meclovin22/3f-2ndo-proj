const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json'

console.log(url);

async function visualizaDadosGlobais(){
    const res = await fetch(url);
    const dados = await res.json();
    const totalPessoasMundo =  (dados.total_pessoas_mundo)/1e9
    const totalPessoasConectadas =  (dados.total_pessoas_conectadas)/1e9
    const tempoMedio = dados.tempo_medio;

    console.log(dados);
    const paragrafo = document.createElement('p');
    paragrafo.classList.add('graficos-texto');
    const container = document.getElementById('graficos-container');
    paragrafo.innerHTML = 'O mundo tem ${totalPessoasConectadas}'
    container.appendChild(paragrafo);
}

visualizaDadosGlobais();