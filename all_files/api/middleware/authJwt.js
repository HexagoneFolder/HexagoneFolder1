const jwt = require('jsonwebtoken')
const db = require('../config/database')
const User = db.user

verifyToken = (req, res, next) => {
    const token = req.headers['x-access-token']

    if (!token) {
        return res.status(403).send({ message: 'No token provided!' })
    }

    jwt.verify(token, config.secret, (err, decoded) => {
        if (err) {
            return res.status(401).send({ message: 'Unauthorized!' })
        }
        req.userId = decoded.id
        next()
    })
}

const authJwt = {
    verifyToken
}
module.exports = authJwt