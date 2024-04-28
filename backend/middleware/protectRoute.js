import jwt from 'jsonwebtoken';
import User from '../models/User.models.js';

const protectRoute =  async (req, res, next) => {
    try{
        const token = req.cookies.jwt;
        
        if(!token){
            console.log(token);
            return res.status(401).json({message: "Unauthorized - No token provided"});
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        if (!decoded){
            return res.status(401).json({message: "Unauthorized - Invalid token"});
        }
        const user = await User.findById(decoded.userId).select("-password");

        if (!user){
             return res.status(401).json({message: "Unauthorized - No user found"});
        }
        req.user = user;

        next();
    } catch (error){
        console.log(error);
        res.status(500).json({message: "Internal server error"});
    }
}

export default protectRoute;