import Express from 'express'
import cors from 'cors'
import { User, criarTabelas } from './db.js'
import { rotas_autenticadas } from './rotas/rotas_autenticacao.js'
import { rotas_usuarios} from './rotas/rotas_usuarios.js'
const app = Express()
app.use(Express.json())
app.use(cors())
// criarTabelas()

app.use('/autenticacao', rotas_autenticadas)
app.use('/usuario', rotas_usuarios)

app.listen(8000)

//git status
//git add .
//git status
//git commit -m "mensagem"
//git status
//git push origin nomedasuabranch
