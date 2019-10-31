const Koa = require('koa');
const Dinosaur = require('./Dinosaur/model');
const dinoRouter = require('./Dinosaur/route');
const questionRouter = require('./Question/route');
const User = require('./User/model');
const cors = require('koa-cors');
const parser = require('koa-bodyparser');

const app = new Koa();
const port = 4000;


app.use(cors());
app.use(parser());
app.use(dinoRouter.routes());
app.use(questionRouter.routes());
app.listen(port, ()=>console.log(`Starting on port ${port}`));

//dbsync().then(createQuestion);