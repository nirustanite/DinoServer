const Router = require('koa-router');
const {listOfQuestions} =  require('../constants')
const router = new Router();

router.get('/question', async (ctx,next) => {
    console.log(listOfQuestions)
    ctx.body = listOfQuestions;
})



// router.get('/question/:id', (ctx, next) => {
//     return Question.findByPk(ctx.params.id)
//         .then(question => {
//             ctx.body = question;
//             next()
//         })
//         .catch(err => {
//             ctx.throw(404, err);
//         })
// })

// router.get('/question', (ctx, next) => {
//     return Question.findAll({
//         where: {
//             id: {
//                 [Op.gt]: 1
//             }
//         }
//     })
//         .then(questions => {
//             ctx.body = questions;
//             next()
//         })
//         .catch(err => {
//             ctx.throw(404, err);
//         })
// })


// router.put("/question/:id", (ctx, next) => {
//     return Question.findByPk(ctx.params.id)
//         .then(question => {
//             return question.update(ctx.request.body)
//                 .then(async () => {
//                     if (question.id === 1) {
//                         await createQuestionfrom2()
//                     }
//                     ctx.body = {
//                         message: "Answer Updated successfully"
//                     }
//                     console.log('ctx', ctx.body)
//                     next()
//                 })
//                 .catch(err => {
//                     console.log('hello')
//                     // ctx.throw(404, err)
//                 })
//         })
// })



module.exports = router;

