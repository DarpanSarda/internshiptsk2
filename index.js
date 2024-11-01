const express = require('express');
const app = express();


const PORT = 3000;
app.use(express.json());

const userRouter = require('./Routes/user.routes');
const { connectdb } = require('./db');
app.get("/",(req,res)=>{
    res.send("Hello");
})
app.use("/api",userRouter);

app.listen(PORT,async()=>{
    await connectdb();
    console.log("server started");
})
