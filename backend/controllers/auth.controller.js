import bcrypt from 'bcryptjs';
import User from '../models/user.model.js';
import generateTokenAndSetCookie from '../utils/generateToken.js';



export const signup = async (req, res) => {
  console.log("✅ signup route hit");

  try {
    const { fullname, username, password, confirmPassword, gender } = req.body;

    if (password !== confirmPassword) {
      return res.status(400).json({ error: "Passwords do not match" });
    }

    const existingUser = await User.findOne({ username });

    if (existingUser) {
      return res.status(400).json({ error: "Username already exists" });
    }

    const salt = await bcrypt.genSalt(10); 
    const hashedPassword = await bcrypt.hash(password,salt);

    // profile picture links
    const boyProfilePic = `https://avatar-placeholder.iran.liara.run/public/boy?username=${username}`;
    const girlProfilePic = `https://avatar-placeholder.iran.liara.run/public/girl?username=${username}`;

    const newUser = new User({
      fullName: fullname,
      username,
      password : hashedPassword, // ❗You should hash this with bcrypt in real apps
      gender,
      profilePic: gender === "Male" ? boyProfilePic : girlProfilePic
    });
    if(newUser){
    generateTokenAndSetCookie (newUser._id,res);
    await newUser.save();

    res.status(201).json({
      _id: newUser._id,
      fullname: newUser.fullName,
      username: newUser.username,
      profilePic: newUser.profilePic
    });
  }else{
    res.status(400).json({error: "Invalid user data"});
  }

  } catch (error) {
    console.error("❌ Error in signup controller:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};


export const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });

    const isPasswordCorrect = await bcrypt.compare(password, user?.password || "");

    // Correct condition: return error ONLY if user doesn't exist or password is wrong
    if (!user || !isPasswordCorrect) {
      return res.status(400).json({ error: "Invalid username or password" });
    }

    generateTokenAndSetCookie(user._id, res);

    res.status(200).json({
      _id: user._id,
      fullName: user.fullName,
      username: user.username,
      profilePic: user.profilePic,
    });
  } catch (error) {
    console.error("❌ Error in Login controller:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const logout = async (req, res) => {
  try {
    // Clear the JWT cookie
    res.cookie("jwt", "", {
      httpOnly: true,
      expires: new Date(0),
    });

    res.status(200).json({ message: "Logged out successfully" });
  } catch (error) {
    console.error("❌ Error in Logout controller:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};


