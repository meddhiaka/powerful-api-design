import express from "express";

const app = express();
app.get("/",(req, res) => {
    console.log("Hello World");
    res.json({message: "hello world"});
    res.sendStatus(200);
})



export default app;