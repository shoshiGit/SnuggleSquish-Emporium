import jwt from "jsonwebtoken";

export const generateToken = (user) => {
    let jwtSecretKey = process.env.JWT_SECRET || "shoshi_secret_key";
    let data = {
        _id: user._id,
        email: user.email,
        role: user.role
    }
    const token = jwt.sign(data, jwtSecretKey, {
        expiresIn: '60s'
    })
    return token;
}