const cron = require("cron");
const https = require("https");
const job = new cron.CronJob("*/13 * * * *", () => {
    https.get(`${process.env.BACKEND_URI_ONLINE}`, () => {
        console.log(`Cron GET request made successfully`);
    }).on("error", () => {
        console.log(`CronJon error occured`);
    })
})
module.export = job;