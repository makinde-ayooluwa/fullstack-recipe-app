const express = require("express"), dotenv = require("dotenv");
dotenv.config({
    path: "./.env"
})
const job = require("./config/cron.js")
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());
job.start();
app.get("/", (req, res) => {
    res.status(200).json({ status: true });
});
app.listen(process.env.PORT, () => {
    console.log("Server listening on port: ", process.env.PORT);
});