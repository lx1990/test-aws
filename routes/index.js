const router = require('koa-router')()
const moment = require('moment');



router.get('/', async (ctx, next) => {
  const now = moment().format();
  await ctx.render('index', {
    title: `Hello Koa 2! 
    now time is ${now}`
  })
})

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

module.exports = router
