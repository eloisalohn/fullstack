import { User } from '../db.js'
import bcryptjs from 'bcryptjs'

const registro_funcao = async (req, res) => {
    try{
     const {nome, sobrenome, email, senha, dataNascimento} = req.body
     if(!nome || !sobrenome || !email || !senha || !dataNascimento){
        res.status(406).send('Todos os campos devem ser enviados')
        return 
     }
        if(await User.findOne({where:{email:email}})){
           res.status(400).send('usuario ja existe no sistema')
           return
        }
     const senhaSegura = bcryptjs.hashSync(senha, 10)
     const novoUsuario = User.create ({
        nome: nome,
        sobrenome: sobrenome,
        email: email,
        senha: senhaSegura,
        dataNascimento: dataNascimento
     })
     res.status(201).send('Ok usuário criado')
        } catch(erro){
     console.log(erro)
        }
    }


const login_funcao = async (req, res) => {
    try{
        const { email, senha } = req.body
        if(!email || !senha ){
            res.status(400)("Todos os campos devem ser preenchidos")
            return
        }
        const usuario = await User.findOne({where:{email:email}})
        if(!usuario){
           res.send('Este email não esta cadastrado')
           return
        }
       const senhaCorreta = bcryptjs.compareSync(senha, usuario.senha)
       if (!senhaCorreta) {
        res.send('a senha esta incorreta')
        return
       }
       const token = jwt.sign(
        {
           nome:usuario.nome,
           email:usuario.email,
           status:usuario.status
        },
        'chavadecriptografiasupersegura',
        {expiresIn: "30d"}
        //playload
        //chave de criptografia
        //tempo de expiração
       )
     
     
     
      
     res.send({msg:'voce foi logado', token: token})
     
     } catch (erro){
        console.log(erro)
        res.status(500).send("Houve um problema")
     }
    }
     


export { registro_funcao,login_funcao}