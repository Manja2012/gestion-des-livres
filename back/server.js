import express from 'express'
import cors from 'cors'
import { ENV } from './config/config.js'

// Connexion MySQL
import './models/index.js'

// // ROUTES
import routerLivre from './routes/livres.route.js'

const app = express()

// PORT
const PORT = ENV.PORT


// MIDDLEWARE
app.use(express.json())
app.use(cors())

// MIDDLEWARE TO ROUTE
app.use("/api/livre", routerLivre)

// LISTEN
app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`);
})