import app from "./app.js";
import { dbConnection } from "./config/dbConnection.js";
import dotenv from 'dotenv'

dotenv.config();
const port = process.env.BACKEND_PORT || 3030;

dbConnection();

app.get('/', (req, res) =>{
   return res.send('Hello world');
})

app.listen(port, ()=> {
    console.log(`Backend Server is running on https://localhost:${port}`);
    
})
