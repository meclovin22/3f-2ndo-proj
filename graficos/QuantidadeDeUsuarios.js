

async function QuantidadeDeUsuarios(){
    const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/numero-usuarios.json'
    const res = await fetch(url);
    const dados = await res.json();
    const nomeDasRedes = Object.keys(dados);
    const QuantidadeDeUsuarios = Object.values(dados);

    const infos = [{
        x:nomeDasRedes,
        y:QuantidadeDeUsuarios,
        type:'bar'
    }]
    const grafico = document.createElement('div');
    grafico.className = 'grafico';
    document.getElementById('graficos-container').appendChild(grafico);
    Plotly.newPlot(grafico,infos);  

}
QuantidadeDeUsuarios();
