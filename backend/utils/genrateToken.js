import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config();

export const genrateToken = (user) =>{
    return jwt.sign({id:user._id, email:user.email}, process.env.JWT_SECRETKEY, {expiresIn: '1d'});
}
