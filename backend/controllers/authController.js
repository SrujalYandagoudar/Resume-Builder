import User from "../models/user.modle.js";
import { genrateToken } from "../utils/genrateToken.js";


export async function login(req, res) {
    try{
        const {email, password} = req.body;

        const exist = await User.findOne({email});
        if(!exist) return res.status(404).json({message:'User Not Exist Plase Signup'});

        const check = await User.findOne({email, password});
        if(!check) return res.status(400).json({message:'Email and Password Not Matching!'});

         const token = genrateToken(check);
        res.cookie('token', token, {
            httpOnly: true,
            secure: false,
            sameSite: 'lax',
             path: "/",
            maxAge: 24*60*60*1000
        }) 

        return res.status(200).json({message:'Login Successfully', token});

    }catch(err){
        console.log('Internal Server Error');
    }
}

export async function signup(req, res) {
    try{
        const {username, password, email} = req.body;

        const exist = await User.findOne({email});
        if(exist) return res.status(400).json({message:'User Already Exists'});

        const newUser = await User.create({username, password, email});
        await newUser.save();

        return res.status(200).json({message:'Signup Successfully'});


    }catch(err){
        console.log("Internal Server Error");
        
    }  
}