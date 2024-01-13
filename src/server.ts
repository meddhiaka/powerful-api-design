import express from "express";
import router from "./router";
import morgan from "morgan";
import cors from "cors";
import { protect } from "./modules/auth";

import { createNewUser, signIn } from "./handlers/user";

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({extended: false}));


app.get("/",(req, res) => {
    res.json({message: "hello world"});
    res.sendStatus(200);
})

app.use('/api', protect, router);
app.use('/signup', createNewUser);
app.use('/signin', signIn);

export default app;