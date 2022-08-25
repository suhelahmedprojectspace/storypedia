import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import router from './routes/user.js'
import bodyParser from 'body-parser'
import 'dotenv/config'
import BlogRouter from './routes/blog.js'

const app = express()

//require('crypto').randomBytes(64).oString('hex')


app.use(bodyParser.json({ limit: '20mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '20mb', extended: true }))
app.use(cors())

app.use('/users', router)
app.use('/blog', BlogRouter)
const PORT = process.env.PORT || 5000
mongoose.connect(process.env.MONGO_DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`successfully connect on port ${PORT}`))).catch(err => console.log(err.message))