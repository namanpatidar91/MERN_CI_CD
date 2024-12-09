const express = require('express');
const app = express();
const cors = require('cors');

const corsOptions = {
    origin : "http://localhost:3000",
    credentials: true
}

app.use(cors('*'));

app.get("/",(req, res)=> {
    return res.send("Hello from backend")
})

app.listen(5000,()=>{
    console.log('server is running successfully on port 5000');
})