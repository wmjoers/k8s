import express from 'express'
import os from 'os';

const app = express();
const PORT = 3100;

app.get("/", (req, res) => {
  const helloMessage = `My Microservice (${process.env.npm_package_version}): ${os.hostname()}`;
  console.log(helloMessage);
  res.send(`{"msg":"${helloMessage}"}`);
});


app.listen(PORT, () => {
  console.log(`Microservice server is listening at port ${PORT}`);
});
