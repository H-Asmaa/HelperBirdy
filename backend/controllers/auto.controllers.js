import User from '../models/User.models.js';
import bcrypt from 'bcryptjs';
import generateTokenAndSetCookie from '../utils/generateToken.js';

export const register = async (req, res) => {
    try {
        const { name, email, password, confirmPass, skills, interests, availability } = req.body;
        
        if (password !== confirmPass) {
            return res.status(400).json({ message: 'Passwords do not match' });
        }
        
        const user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new User({
            name,
            email,
            password: hashedPassword,
            confirmPass,
            skills,
            interests,
            availability
        });
        if (newUser){
            // Generate token and set cookie
            generateTokenAndSetCookie(newUser._id, res);
            // Save the new user
            await newUser.save();
            res.status(201).json({
                _id: newUser._id,
                name: newUser.name,
                email: newUser.email,
                skills: newUser.skills,
                interests: newUser.interests,
                availability: newUser.availability
            });
        }else{
            res.status(400).json({message: "Invalid user data"});
        }

        // Send response
    } catch (error) {
        console.log(`register error: ${error.message}`);
        return res.status(500).json({ message: error.message });
    }
};

export const login = async (req, res) => {
    try{
        const {email, password} = req.body;
        
        const user = await User.findOne({email});
        const isPasswordCorrect = await bcrypt.compare(password, user?.password || "");

        if (!user || !isPasswordCorrect){
            return res.status(400).json({error: "Invalid username or password"})
        }

        generateTokenAndSetCookie(user._id, res);
        res.status(200).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            skills: user.skills,
            interests: user.interests,
            availability: user.availability
        })
    }catch(error){
        console.log(`Error in the login controller, ${error.message}`);
        res.status(500).json({error: "Server Error"});
    }
}

export const logout = async (req, res) => {
    try{
        res.cookie("jwt", "", { maxAge: 0});
        res.status(200).json({message: "Logged out successfully"});
    }catch(error){
        console.log(`Error in the logout controller, ${error.message}`);
        res.status(500).json({error: "Server Error"});
    }
}
