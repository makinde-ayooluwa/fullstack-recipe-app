const User = require("../models/userModel");

const registerUser = async (req, res) => {
    console.log(req.body);
    const { fullname, email, password } = req.body;
    if (fullname == "") {
        res.status(500).json({ status: "error", message: "Fullname is required" });
    } else if (email == "") {
        res.status(500).json({ status: "error", message: "Email is required" });
    } else if (password == "") {
        res.status(500).json({ status: "error", message: "Password is required" });
    } else {
        try {
            const newUser = await User.create({ fullname: fullname, email: email, password: password });
            res.status(200).json({ status: "success", message: "Successfully signed up as " + newUser.fullname, data: newUser })
            console.log("User registered as", newUser.fullname);
        } catch (error) {
            res.status(500).json({ status: "error", message: "Internal server error" })
            console.log("Registration error:", error)
        }
    }
}
module.exports = { registerUser };