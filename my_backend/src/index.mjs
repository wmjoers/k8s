import express from 'express'
import os from 'os';
import fetch from 'node-fetch'
import cors from 'cors';

const app = express();
const PORT = 3000;

app.use(cors());

app.get("/", (req, res) => {
  const helloMessage = `My Backend (${process.env.npm_package_version}): ${os.hostname()}`;
  console.log(helloMessage);
  res.send(`{"msg":"${helloMessage}"}`);
});

app.get("/micro", async (req, res) => {
  const url = 'http://my-microservice-service:4100'
  const response = await fetch(url);
  const body = await response.text();
  res.send(body)
});

app.listen(PORT, () => {
  console.log(`Backend server is listening at port ${PORT}`);
});
