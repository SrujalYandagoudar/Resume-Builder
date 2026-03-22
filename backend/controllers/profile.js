import User from "../models/user.modle.js";


export async function profile(req, res) {
    try{
        const userId = req.user.id;
        const userDetail = await User.findById(userId).select('-password');
        return res.status(200).json({userDetail})
    }catch(err){
        console.log('Internal Server Error');
    }
}