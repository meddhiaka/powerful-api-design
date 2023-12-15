import { createJWT } from "../modules/auth";
import { hashedPassword, comparePasswords } from "../modules/auth";
import prisma from "./../modules/db";

export async function createNewUser(req, res) {
    const hash = await hashedPassword(req.body.password);
    
    const user = await prisma.user.create({
        data: {
            username: req.body.username,
            password: hash
        }
    })

    const token = createJWT(user);
    res.json({ token });
}

export async function signIn(req, res) {
    const { username, password } = req.body;
    const user = await prisma.user.findUnique({
        where: {
            username: username
        }
    })

    const isValid = await comparePasswords(password, user.password);

    if (!isValid) {
        res.status(401);
        res.json({
            message: "password is not valid"
        })
        return;
    }

    const token = createJWT(user);
    res.json({ token });
}