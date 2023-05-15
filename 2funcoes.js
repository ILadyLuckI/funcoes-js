/*

function escreveNome(nome) {
    console.log('Meu nome é ' + nome);
}

escreveNome('Daiana');
escreveNome('Izabella');

function verificaIdade(idade) {
    if (idade >= 18) {
        console.log('Maior');
    } else {
        console.log('Menor');
    }
}

verificaIdade(11);
*/


/*reescrevendo e utilizando o return*/
function escreveNome(nome) {
    return 'Meu nome é ' + nome;
}


function verificaIdade(idade) {
    if (idade >= 18) {
        console.log(escreveNome('Daiana ') + 'e sou maior');
    } else {
        console.log('e sou menor');
    }
}

verificaIdade(36);