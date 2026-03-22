import jwt from 'jsonwebtoken'
import User from '../models/user.modle.js';

export async function verifyToken(req, res, next) {
    try{
        console.log("Cookies received:", req.cookies);
        const token = req.cookies.token;

        if(!token) return res.status(404).json({message:'Authtoken Not Found'});

        const decode = jwt.verify(token, process.env.JWT_SECRETKEY);
        const user = await User.findById(decode.id).select("-password");

        if(!user) return res.status(404).json({message:'User Not Found'})

         req.user = user;   
        return next();    
    }catch{
        console.log('Authtoken Verify Problem');
    }
}