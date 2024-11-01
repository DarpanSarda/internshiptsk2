const { getUserIdfromtoken } = require("../Middleware/JwtProvider");
const UserModel = require("../Model/User.Model");

const ProfileController = async(req,res)=>{
    try {
        const jwt=req.headers.authorization?.split(" ")[1];

        if(!jwt)
        {
            return res.status(404).send({
                error:"User Not Found",
                success:true
            })
        }
        const userId = getUserIdfromtoken(jwt);
        const user = await UserModel.findById(userId);
        if(!user)
        {
            throw new Error("user not found")
        }
        return res.status(200).send(user)
    } catch (error) {
        return res.status(500).send({
            message:error.message,
            success:false
        })
    }
}
module.exports={ProfileController};