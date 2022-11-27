import * as dotenv from "dotenv";
const loadEnv = dotenv.config();

if (loadEnv.error) {
  console.log("Error while loading env variables");
  process.exit(1);
}

import * as express from "express";
import { root } from "./routes/root";
import { isInteger } from "./utils";
import { logger } from "../logger";

const app = express();
function setupExpress() {
  app.route("/").get(root);
}

function startServer() {
  console.log(process.argv);
  let port: number;
  const portEnv = process.env.PORT,
    portArgv = process.argv[2];

  if (isInteger(portEnv)) {
    port = parseInt(portEnv);
  }

  if (!port && isInteger(portArgv)) {
    port = parseInt(portArgv);
  }

  if (!port) {
    port = 9000;
  }

  app.listen(port, () => {
    logger.info(`App listening at http://localhost:${port}`);
  });
}

setupExpress();
startServer();
