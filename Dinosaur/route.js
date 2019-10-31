const Router = require('koa-router');
const Dinosaur = require('./model');
const calculatedinoId = require('./calculatedinoId');
const router = new Router();
let fs = require('fs'); 
const send = require('koa-send');
const serve = require('koa-static');
const basePath="/home/nirupamaa/Desktop/codaisseur/week-10/findmydino/imagesdino"

router.post('/dinosaur', async(ctx,next) => {
    return Dinosaur.create(ctx.request.body)
                   .then(async() => await next())
})



router.post('/dinosaurname', async(ctx, next) => {
       console.log("Array? :",ctx.request.body.answer)
       const total = await calculatedinoId(ctx.request.body.answer)
       console.log("total",total)
       return Dinosaur.findOne({
           where:{
               dinoid:total
           }
       })
       .then(async(dinosaur) => {
           ctx.body = dinosaur
           next()
       })
       .catch(err => {
           ctx.throw(404,err)
       })

})



module.exports = router;