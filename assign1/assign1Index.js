
// import express from 'express'
// import BookRouter from './routes/BookRoutes.js'
// import cors from 'cors'


// const PORT = 5000

// export const Assign1Index = async(connectDb) => {

//     connectDb()

//     const app = express()
//     app.use(express.json())
//     app.use(cors({
//         methods: ['GET','POST','PUT','DELETE']
//     }))

//     app.use("/",BookRouter)

//     app.listen(PORT,()=>{
//         console.log(`Server Started : ${PORT}`)
//     })
// }