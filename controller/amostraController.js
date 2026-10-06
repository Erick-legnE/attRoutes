import * as repository from '../repository/amostraRepository.js'
import { Amostra } from '../model/Amostra.js';

export function cadastrarAmostra2(req,res){
    const {codigo,material,origem,resultado} = req.body;

    const amostra = new Amostra(codigo,material,origem,resultado);

    repository.cadastrarAmostra(amostra);
    
    res.status(201).json(amostra);
}

export function listarAmstras(req,res){
    const produtos = repository.listar();
    res.status(200).json(produtos);
}

export function buscarAmostra(req,res){
    const indice = Number(req.params.indice);
    res.json(amostras[indice]);
    
    if (!amostra){
        return res.status(404).json({mensagem: 'Amostra não encontrada.'})
    }
}

export function excluirAmostra(req,res){
    const indice = Number(req.params.indice);
    repository.excluir(indice);
    res.json({mensagem: 'Amostra deletada.'})
}

export function atualizarAmostra(req,res){
    const indice = Number(req.params.indice);

    const amostra = repository.buscarPorIndice(indice);

    if (!amostra){
        return res.status(404).json({
            mensagem: "deu errado"
        })
    }
    const {codigo,material,origem,resultado} = req.body;

    if (codigo !== undefined){
        amostra.codigo = codigo;
    }

    if (material !== undefined){
        amostra.material = material;
    }
    
    if (origem !== undefined){
        amostra.origem = origem;
    }
    
    if (resultado !== undefined){
        amostra.resultado = resultado;
    }

    res.json(amostra);
}
