const UserModel = require('../Model/User.Model');
const bcrypt = require('bcrypt');
const JwtProvider = require('../Middleware/JwtProvider');

const LoginController = async(req,res)=>{
    try {
        const {email,password} = req.body;
        const userexist = await UserModel.findOne({Email:email});
        console.log(userexist)
        if(!userexist)
        {
            return res.status(400).send({
                success:false,
                message:"Please Signup First"
            });
        }
        const ispasswordsame = await bcrypt.compare(password,userexist.Password);
        if(!ispasswordsame)
            {
                return res.status(400).send({
                    success:false,
                    message:"Wrong Credentials"
                }); 
            }
        const jwt = await JwtProvider.generateToken(userexist._id);        
        return res.status(200).send({
            jwt,
            message:"Login Success",
            success:true,
            userexist,
        })
    } catch (error) {
        console.log(error)
        return res.status(500).send({
            message:error.message,
            success:false
        })       
    }
}

module.exports = {LoginController};