const form = document.getElementById('form-atividade')
const imgAprovado = '<img src="imagens/aprovado.png" alt="Emoji festejando"/>'
const imgReprovado = '<img src="imagens/reprovado.png" alt="Emoji triste"/>'
const atividade = [];
const notas = []; 
const spanAprovado = '<span class ="resultado aprovado">Aprovado</span>'
const spanReprovado = '<span class ="resultado reprovado">Reprovado</span>'
const notaMinima = parseFloat( prompt("Digite a nota minima"));

let linhas = '';

form.addEventListener('submit', function (e) {
    e.preventDefault(); 

    adicionaLinha();
    atualizaTabela();
    atualizaMedia ();
});

function adicionaLinha(){
    const inputNomeAtividade = document.getElementById('nome-atividade')
    const inputNotaAtividade = document.getElementById('nota-atividade')

    if(atividade.includes(inputNomeAtividade.value)){
        alert (`a atividade: ${inputNomeAtividade.value} Já foi inserida`);
    } else{
    atividade.push(inputNomeAtividade.value);
    notas.push(parseFloat(inputNotaAtividade.value));

    let linha = '<tr>';
    linha +=`<td> ${inputNomeAtividade.value} </td>`
    linha +=`<td> ${inputNotaAtividade.value} </td>`
    linha +=`<td> ${inputNotaAtividade.value >= notaMinima ? imgAprovado : imgReprovado } </td>`
    linha +=`</tr>`

    linhas += linha;
    }

    inputNomeAtividade.value = '';
    inputNotaAtividade.value = '';
}

function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

function atualizaMedia (){
    const mediaFinal = calculaMedia();
    document.getElementById('Media-Final-valor').innerHTML = mediaFinal.toFixed(2);
    document.getElementById('media-Final-resultado').innerHTML = mediaFinal >= notaMinima ? spanAprovado : spanReprovado;
}

function calculaMedia () {
    let somadasnotas = 0;

    for (let i = 0; i < notas.length; i++){
        somadasnotas +=  notas[i];
    }
    return somadasnotas / notas.length;
}
