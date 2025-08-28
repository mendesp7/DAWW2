import express from 'express';
const router = express.Router();

//busca o alunoController
import AlunoController from '../controllers/alunoController';
const controle = new AlunoController();

const caminhoBase = 'aluno/'

router.get ('/' + caminhoBase + 'add', controle.openAdd)
router.post ('/' + caminhoBase + 'add', controle.add)
router.get ('/' + caminhoBase + 'lst', controle.list)

export default router 