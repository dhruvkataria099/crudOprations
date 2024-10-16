import 'dotenv/config'
import express from 'express'
import userRouter from './router/user.router.js'
import { connection } from './utils/connection.js'
import cors from 'cors'

connection()

const app = express()
app.use(express.json())
app.use(cors())

app.use('/api/v1', userRouter )

app.listen(process.env.PORT, () => {
    console.log(`server is running on port ${process.env.PORT}`);
})