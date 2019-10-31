const Sequelize = require('sequelize');
const db = require('../db');

const Dinosaur = db.define('dinosaur', {
    dinoname:{
        type: Sequelize.STRING,
        allowNull: false
    },
   dinoid: {
       type: Sequelize.INTEGER,
       allowNull: false
   }
},{
    timestamps:false
})


module.exports = Dinosaur;