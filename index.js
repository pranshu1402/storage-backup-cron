const cron = require("node-cron");
const { exec } = require("child_process");

const backupJob = new cron.schedule("10 * * * * *", function () {
  console.log("executing cron");
  exec(
    `mongodump --uri="mongodb://mongo:UJJWxg8mWr9quUa6hceu@containers-us-west-156.railway.app:6341/" -d=test --out=./fileStorage/backup`,
    (error, stdout, stderr) => {
      if (error) {
        console.error(`exec error: ${error}`);
        return;
      }
      console.log(`stdout: ${stdout}`);
      console.log(`stderr: ${stderr}`);
    }
  );
});

backupJob.start();
