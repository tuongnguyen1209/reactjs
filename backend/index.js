const app = require("./src/config/app");
const db = require("./src/config/databaseConfig");

// config env
require("dotenv").config({ path: `${__dirname}/.env.dev` });

const port = process.env.PORT | 4000;
const urlDb = process.env.DATABASE_STRING;
const passDb = process.env.DATABASE_PASSWORD;

const uriDB = urlDb.replace("<password>", passDb);

// db
db.connect(uriDB);

const server = app.listen(port, () => {
  console.log(`App run in port ${port} at ${new Date().toString()}`);
});
