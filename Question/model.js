const Sequelize = require('sequelize');
const db = require('../db');

const Question = db.define('question', {
    question:{
        type: Sequelize.STRING,
        allowNull: false
    },
    category:{
        type: Sequelize.INTEGER,
        allowNUll: false
    },
    choice1:{
        type: Sequelize.INTEGER,
        allowNUll: false
    }, 
    choice2:{
        type: Sequelize.INTEGER,
        allowNUll: false
    }, 
    choice3:{
        type: Sequelize.INTEGER,
        allowNUll: false
    },
    choice4:{
        type: Sequelize.INTEGER,
        allowNUll: false
    },
    answer:{
        type: Sequelize.STRING,
        allowNull: false
    }
})


module.exports = Question;