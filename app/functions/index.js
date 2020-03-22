const jwtSimple = require('jwt-simple')
const moment = require('moment')
const config = require('../../dbconfig/connectionstring.config')

//Create Token
function createToken(user) {
    const payload = {
        uid: user.id,
        ct: moment().unix(),
        wt: moment()
            .add(2,'hours')
            .unix()
    }
    return jwtSimple.encode(payload, config.token_key)
}

// THIS IS A TOKEN MIDDLEWARE
function decodeToken(req, res, next) {
    try{
        console.log('HEADERS', req.headers)
        const token = req.headers.authorization.replace('BEARER','')
        const payload = jwtSimple.decode(token, config.token_key)
        if(payload.exp <= moment().unix()){
            return res
            .status(401)
            .send({ status: 401, messege: 'The token has expired'})
        }
    }
    catch(err){
        return res
        .status(500)
        .send({status: 500, messege: 'Incorrect token', err})
    }
}

module.exports = {
    createToken,
    decodeToken
}