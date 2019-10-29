const Sequelize = require('sequelize');
const db = require('../db');

const Dinosaur = db.define('dinosaur', {
    dinoname:{
        type: Sequelize.STRING,
        allowNull: false
    },
    strength:{
        type: Sequelize.INTEGER,
        allowNUll: false
    },
    type:{
        type: Sequelize.INTEGER,
        allowNUll: false
    }, 
    height:{
        type: Sequelize.INTEGER,
        allowNUll: false
    }, 
    foodhabits:{
        type: Sequelize.INTEGER,
        allowNUll: false
    },
    looks:{
        type: Sequelize.INTEGER,
        allowNUll: false
    }
})


module.exports = Dinosaur;