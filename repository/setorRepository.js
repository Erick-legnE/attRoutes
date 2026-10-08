
export const setorar = [];

export function cadastrar(setor){
    setorar.push(setor);
}

export function listar(){
    return setorar;
}

export function buscarPorIndice(indice){
    return setorar[indice];
}

export function excluir(indice){
    setorar.splice(indice,1);
}
export function atualizar(indice,setor){
    setorar[indice] = setor;
}