import express from 'express'
import PastelRoutes from './routes/pastel.routes'

const app = express()

app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2);

app.get('/', (req, res) => {  
    res.json({
        "name": "Dennis",
        "last_name": "Mugarte"})
})

app.use('/api/pastel/',PastelRoutes)

export default app;