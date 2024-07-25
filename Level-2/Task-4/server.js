import mongoose from 'mongoose'
import express from 'express'



const app = express();
mongoose()

app.use(express.json());


app.use('/api/users',userRoutes)


app.listen(3001, ()=> console.log("server running"));
