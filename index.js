const Koa = require('koa');

const app = new Koa();
const port = 4000;

app.listen(port, ()=>console.log(`Starting on port ${port}`))