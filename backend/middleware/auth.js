import jwt from 'jsonwebtoken'
import user from '../models/user.js'

export const auth = async (req, res, next) => {
    const header = req.headers.authorization
    if (!header) {
        return res.status(401).json({ error: 'No token' })
    }
    const token = header.spilt(' ')[1]
    try {
        const { _id } = jwt.verify(token, process.env.SECRECT_ACCESS_TOKEN)
        req.user = await user.findOne({ _id }).select('_id')
        next()

    }
    catch (error) {
        console.log(error)
        res.status(401).json({ message: 'Request is not authorized' })
    }

}