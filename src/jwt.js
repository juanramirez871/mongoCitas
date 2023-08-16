import jwt from "jsonwebtoken";

export const generateJwt = (req, res) => {
    
    const token = jwt.sign({

    }, "fklsjdflk", {
        expiresIn: 86400
    });

    res.json({token});
}

export const verifyJwt = (req, res, next) => {

    const token = req.headers.authorization;
    if(token){
        
        const isValid = jwt.verify(token, "fklsjdflk")
        if(isValid) return next();
        res.status(500).json({ msg: "token invalido" });
    }

    res.status(500).json({ msg: "token no encontrado" });
}