import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
dotenv.config();

export function comparePasswords(password, hashedPassword) {
    return bcrypt.compare(password, hashedPassword);
}

export function hashedPassword(password) {
    return bcrypt.hash(password, 7);
}


export function createJWT(user) {
    const credentials = {
        id: user.id,
        username: user.username
    };
    const token = jwt.sign(credentials, process.env.JWT_SECRET)
    return token;
}

export function protect(req, res, next) {
    const bearer = req.headers.authorization;
    if (!bearer) {
        res.status(401).json({
            message: "bearer is null\n not authorized"
        }) //unauthorized
        return;
    }

    const token = bearer.split(" ")[1];
    if(!token) {
        res.status(401).json({
            message: "no token\n not authorized"
        }); //unauthorized
        return;
    }

    
    try {
        const user = jwt.verify(token, process.env.JWT_SECRET);
        req.user = user;
        console.log("user: ", user);
        next();
    } catch(e) {
        console.error(e);
        res.status(401).json({
            message: "no user\n not authorized"
        }); //unauthorized
        return;
    }
}