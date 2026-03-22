import User from "../models/user.modle.js";
import { genrateToken } from "../utils/genrateToken.js";


export async function login(req, res) {
    try{
        const {username, password} = req.body;

        const exist = await User.findOne({username});
        if(!exist) return res.status(404).json({message:'User Not Exist Plase Signup'});

        const check = await User.findOne({username, password});
        if(!check) return res.status(400).json({message:'Username and Password Not Matching!'});

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

        const token = genrateToken(newUser);
        res.cookie('token', token, {
            httpOnly: true,
            secure: false,
            sameSite: 'lax',
                path: "/",
            maxAge: 24*60*60*1000
        }) 

        return res.status(200).json({message:'Signup Successfully', token});


    }catch(err){
        console.log("Internal Server Error");
        
    }  
}