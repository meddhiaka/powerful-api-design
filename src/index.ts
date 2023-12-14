import app from './server';
import dotenv from "dotenv";
dotenv.config();

app.listen(1337, () => {
    console.log("Server running at http://localhost:1337/");
});