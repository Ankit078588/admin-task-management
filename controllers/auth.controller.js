import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';
import { User } from "../models/User.js";
import { signupSchema } from "../validators/user.validator.js";


// Signup
export const signup = async (req, res) => {
    try {
        // validations
        const { error, value } = signupSchema.validate(req.body, {
            abortEarly: false
        });
          
        if (error) {
            return res.status(400).json({
              message: 'Validation failed',
              errors: error.details.map(err => err.message)
            });
        }
          
        // filtered data
        const { name, email, password, gender, role } = value;

        // check if user exists
        const existingUser = await User.findOne({
            where: { email }
        });
        if (existingUser) {
            return res.status(400).json({message: 'Email is already registered.'});
        }

        // create new user
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await User.create({
            name,
            email,
            password: hashedPassword,
            gender,
            role,
        });

        res.status(201).json({ message: 'Signup successful.',  user: newUser});
    } catch(e) {
        res.status(500).json({message: 'Internal Server Error!'});
    }
}


// Login
export async function login(req, res) {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: 'Both Email and password are required.'});
    }

    // find user
    const user = await User.findOne({ 
        where: { email } 
    });


    if (!user) {
      return res.status(401).json({ message: 'Incorrect email or password.' });
    }

    // check password
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      return res.status(401).json({ message: 'Incorrect email or password.' });
    }

    // generate token
    const payload = { id: user.id, email: user.email, role: user.role };
    const token = jwt.sign( payload, process.env.JWT_SECRET, 
        { expiresIn: '1d' } 
    );

    return res.status(200).json({ message: 'Login successful.', token });
  } catch (err) {
    return res.status(500).json({ message: 'Internal Server Error.' });
  }
}


