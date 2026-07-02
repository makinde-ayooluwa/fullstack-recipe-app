const { default: mongoose } = require("mongoose")

const connectDb = async()=>{
    try {
        const connection = await mongoose.connect(`${process.env.DATABASE_URI}`);
        console.log("Database connected. Connection check: ", connection.connection.host);
    } catch (error) {
        console.log("Database error occured:", error);
        process.exit(0);
    }
}
module.exports = connectDb;