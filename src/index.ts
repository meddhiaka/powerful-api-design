import app from './server';
import dotenv from "dotenv";
dotenv.config();

app.listen(process.env.port, () => {
    console.log(`Server running at http://localhost:${process.env.port}/`);
});