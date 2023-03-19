import express from 'express'
import IndexRoutes from './routes/index'

const app = express()

app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2);

app.get('/', (req, res) => {  
    res.json({
        "name": "Dennis",
        "last_name": "Mugarte"})
})

app.use(IndexRoutes)

export default app;