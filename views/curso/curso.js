import conexao from "../../config/conexao";

const curso = conexao.Schema({
    nome: {type:String, required:true},
    area: {type:String, required:true},
    anofundacao: {type:String, required:true},
    nivel: {type:String, required:true},
})

export default conexao.model('curso', curso)