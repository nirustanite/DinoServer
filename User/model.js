const Sequelize = require('sequelize');
const db = require('../db');

const User = db.define('user', {
    playername:{
        type: Sequelize.STRING,
        allowNull: false
    },
    petdino:{
        type: Sequelize.STRING,
        allowNUll: false
    },
})


module.exports = User;