const express = require("express"), dotenv = require("dotenv");
const job = require("./config/cron.js")
const cors = require("cors");
const initializeSocket = require("./config/socket.js");
const connectDb = require("./config/db.js");
dotenv.config({
    path: "./.env"
})
const app = express();
app.use(express.json());
job;
initializeSocket();
// connectDb();
app.use(cors());
app.get("/", (req, res) => {
    res.status(200).json({ status: true });
    console.log("Request made");
});
app.listen(process.env.PORT, () => {
    console.log("Server listening on port: ", process.env.PORT);
});