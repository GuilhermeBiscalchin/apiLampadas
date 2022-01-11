import express from 'express'
import cors from 'cors'

import {router} from './routes'

import './database'
import statusRoute from './status/status.route'

const app = express()

app.use(statusRoute)

app.use(cors())
app.use(express.json())
app.use(router)

app.listen(5000,() =>{
    console.log('Servidor rodando na porta: 5000')
})