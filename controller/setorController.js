import * as repository from '../repository/setorRepository.js'
import { Setor } from '../model/Setor.js';

export function cadastrar(req,res){
    const {nome,sigla,responsavel,ramal} = req.body;

    const setor = new Setor(nome,sigla,responsavel,ramal);

    repository.cadastrar(setor);
    
    res.status(201).json(setor);
}

export function listar(req,res){
    const produtos = repository.listar();
    res.status(200).json(produtos);
}

export function buscar(req,res){
    const indice = Number(req.params.indice);
    const setorar = repository.listar();
    
    if (setorar[indice] === undefined){
        return res.status(404).json({mensagem: 'Setor não encontrado.'})
    }else{
        res.json(setorar[indice]);
    }
}

export function excluir(req,res){
    const indice = Number(req.params.indice);
    repository.excluir(indice);
    res.json({mensagem: 'Setor deletado.'})
}

export function atualizar(req,res){
    const indice = Number(req.params.indice);

    const setor = repository.buscarPorIndice(indice);

    if (!setor){
        return res.status(404).json({
            mensagem: "deu errado"
        })
    }
    const {nome,sigla,responsavel,ramal} = req.body;

    if (nome !== undefined){
        setor.nome = nome;
    }

    if (sigla !== undefined){
        setor.sigla = sigla;
    }

    if (responsavel !== undefined){
        setor.responsavel = responsavel;
    }

    if (ramal !== undefined){
        setor.ramal = ramal;
    }

    res.json(setor);
}
