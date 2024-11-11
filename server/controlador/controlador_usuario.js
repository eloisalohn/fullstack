import { User } from '../db.js'

const pegar_usuario_funcao = async (req, res) => {
    const id_requisicao = req.params.id
    const user = await User.findByPk(id_requisicao);
    if (!user){ 
        res.status(404).send('user not found')
        return
    }
    res.send (user)
    return
    
}
export {pegar_usuario_funcao}