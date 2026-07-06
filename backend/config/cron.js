const cron = require("cron");
const https = require("https");
const job = new cron.CronJob("*/5 * * * *", () => {
    https.get(`${process.env.BACKEND_URI_ONLINE}`, (res) => {
        if(res.statusCode === 200) console.log(`Cron GET request made successfully`);
        else console.log("Error occured while making GET request");
    }).on("error", () => {
        console.log(`CronJob error occured`);
    })
}).start();
module.export = job;