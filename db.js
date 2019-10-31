const Sequelize = require('sequelize');

const connectonString = `postgres://postgres:secret@localhost:5432/postgres`

const db = new Sequelize(connectonString);

db.sync({force: false})
    .then(() => console.log("Db schema updated"))
    .catch(console.error())


module.exports = db;