// create express app
const express = require("express");
const app = express();
// create routes
const routes = require("./collections");
const database = require("./database");
const cors = require("cors");
const bodyParse = require("body-parser");
// run on port number
const PORT = process.env.PORT || 4001;

const NodeJsServer = async () => {
  try {
    app.use(cors());
    app.use(bodyParse.json());
    app.use(routes());
    await database();
    // app listen on that port
    app.listen(PORT, () =>
      console.log(`server is live on http://localhost:${PORT}`)
    );
  } catch (error) {
    console.log("🚀 ~ file: index.js:23 ~ NodeJsServer ~ error", error);
  }
};

NodeJsServer();
