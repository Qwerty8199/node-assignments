
import express from 'express'
import BookRouter from './routes/BookRoutes.js'
import cors from 'cors'
import { RequestLogger } from './middleware/RequestLogger.js'
import { ErrorHandler } from './middleware/ErrorHandler.js'

const PORT = 5000

export const Assign2Index = async(connectDb) => {

    connectDb()

    const app = express()
    app.use(express.json())
    app.use(cors({
        methods: ['GET','POST','PUT','DELETE']
    }))

    app.use(RequestLogger);
    app.use(ErrorHandler)

    app.use("/",BookRouter)

    app.listen(PORT,()=>{
        console.log(`Server Started : ${PORT}`)
    })
}