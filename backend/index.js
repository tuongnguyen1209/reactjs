const app = require("./src/config/app");
const db = require("./src/config/databaseConfig");

// config env
require("dotenv").config({ path: `${__dirname}/.env.dev` });

const port = process.env.PORT | 4000;
const urlDb = process.env.DATABASE_STRING;
// db
db.connect(urlDb);

const server = app.listen(port, () => {
  console.log(`App run in port ${port} at ${new Date().toString()}`);
});
