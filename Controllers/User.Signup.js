const UserModel = require('../Model/User.Model');
const bcrypt = require('bcrypt');
const { sendEmail } = require('../utils/nodemailer');

const SignupController = async(req,res)=>{
    try {
        let{username,password,email} = req.body;
        if(!username || !password || !email)
        {
            res.status(401).send({
                success:"false",
                message:"Please enter all the fields"
            });
        }
        const userexists = await UserModel.findOne({email});
        if(userexists)
        {
            res.status(401).send({
                success:"false",
                message:"User Already Registered"
            });
        }
        password = await bcrypt.hash(password,10);
        const User=new UserModel({
            UserName:username,
            Password:password,
            Email:email
        });
        await User.save();
        if(!User)
        {
            return res.status(400).send({
                success: false,
                message: "Please Try after Sometime",
          });
        }
        
        sendEmail(email, 'Registration Successful', 'You have been successfully loggedIn');
        return res.status(200).send({
            success:true,
            message:"User Registered Successfully"
        })
    } catch (error) {
        return res.status(400).send({
            success:false,
            error:error.message
        })
    }
}

module.exports={SignupController};