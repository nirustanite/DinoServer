const Koa = require('koa');
const Dinosaur = require('./Dinosaur/model');
const dinorouter = require('./Dinosaur/route');
const Question = require('./Question/model');
const User = require('./User/model');
const cors = require('koa-cors');
const parser = require('koa-bodyparser');


const app = new Koa();
const port = 4000;


app.use(cors());
app.use(parser());
app.use(dinorouter.routes());
app.listen(port, ()=>console.log(`Starting on port ${port}`))