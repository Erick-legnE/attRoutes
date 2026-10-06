
export const amostrar = [];

export function cadastrarAmostra(amostra){
    amostrar.push(amostra);
}

export function listar(){
    return amostrar;
}

export function buscarPorIndice(indice){
    return amostrar[indice];
}

export function excluir(indice){
    amostrar.splice(indice,1);
}
export function atualizar(indice,amostra){
    amostrar[indice] = amostra;
}