import express from 'express'
import cors from 'cors'
import postsRouter from '../routes/posts.routes.js'

const app = express()
const PORT = process.env.PORT ?? 3000

app.use(cors())
app.use(express.json())
app.use('/', postsRouter)

app.listen(PORT, () => console.log(`SERVER UP!!! ✔  http://localhost:${PORT}`))

export default app
