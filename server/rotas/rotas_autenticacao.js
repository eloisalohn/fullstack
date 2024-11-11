import express from 'express'
import { login_funcao, registro_funcao } from '../controlador/controlador_autenticação.js'

const rotas_autenticadas = express.Router()

rotas_autenticadas.post('/registro', registro_funcao)
rotas_autenticadas.post('/login', login_funcao)

export { rotas_autenticadas}