const express = require("express"), dotenv = require("dotenv");
const job = require("./config/cron.js")
const cors = require("cors");
dotenv.config({
    path: "./.env"
})
const app = express();
app.use(express.json());
job;
app.use(cors());
app.get("/", (req, res) => {
    res.status(200).json({ status: true });
});
app.listen(process.env.PORT, () => {
    console.log("Server listening on port: ", process.env.PORT);
});