import express from 'express'
import cors from 'cors'
import postsRouter from './routers/posts.js'
import mongoose from 'mongoose'
const app = express()

const PORT = process.env.PORT ?? 5000
const URI = 'mongodb+srv://Dken:admin123H@cluster0.zv7fqn6.mongodb.net/?retryWrites=true&w=majority'

app.use(express.urlencoded({extended: true}))
app.use(express.json({limit: '30mb'}))
app.use(cors())

app.use('/posts', postsRouter)

app.get('/', (req, res) => {
    res.send('<h1>This is my blog</h1>')
})

mongoose
    .connect(URI, {useUnifiedTopology: true})
    .then(() => {
        console.log('connect to DB atlats')
        app.listen(PORT, () => {
            console.log(`server is running on ${PORT}...`)
        })
    })
    .catch((err)=> console.log('Fail to connect DB: ', err))




