const { Schema, default: mongoose } = require("mongoose");
const bcrypt = require("bcrypt");
const userSchema = new Schema({
    fullname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});
userSchema.pre("save", async function (next) {
    if (!this.isModified(this.password)) next();
    const newPwd = await bcrypt.hash(this.password, 10);
    this.password = newPwd;
})
userSchema.methods.checkPassword = async (password) => {
    const check = await bcrypt.compare(password, this.password);
    if(check){
        return true;
    }else{
        return false;
    }
}
const User = mongoose.model("users",userSchema);
module.exports = User;