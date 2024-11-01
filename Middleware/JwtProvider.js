const jwt = require('jsonwebtoken')

const SECRET_KEY="jbijhiecnkd"

const generateToken=(userid)=>{
    const token = jwt.sign({userid}, SECRET_KEY);
    return token;
}

const getUserIdfromtoken=(token)=>{
    const decodedtoken = jwt.verify(token,SECRET_KEY)
    console.log(decodedtoken)
    return decodedtoken.userid;
}

module.exports={generateToken,getUserIdfromtoken}