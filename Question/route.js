const Router = require('koa-router');
const {listOfQuestions} =  require('../constants')
const router = new Router();

router.get('/question', async (ctx,next) => {
    console.log(listOfQuestions)
    ctx.body = listOfQuestions;
})




module.exports = router;

