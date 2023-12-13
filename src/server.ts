import express from "express";
import router from "./router";
import morgan from "morgan";
import cors from "cors";

const app = express();

function logger(msg) {
    return (req, res, next) => {
        console.log(`message: ${msg}`);
        next();
    }
}

app.use(cors());
app.use(morgan("dev"));
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(logger("fuck qshd"));


app.get("/",(req, res) => {
    console.log("Hello World");
    res.json({message: "hello world"});
    res.sendStatus(200);
})

app.use('/api', router);

export default app;