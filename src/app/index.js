const Koa = require('koa');
const ResponseTime = require('koa-response-time');
const morgan = require('koa-morgan');
const koaBody = require('koa-body');
const koaHelmet = require('koa-helmet');
const router = require('routes');
const db = require('db');

const app = new Koa();

app.use(koaHelmet());
app.use(koaBody());
app.use(ResponseTime());
app.use(morgan('combined'));
app.use(async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    ctx.status = 500;
    ctx.body = err;
    console.log(err);
  }
});
app.use(router.routes());

exports.start = async function () {
  try {
    await db.start();
    console.log('Database Connected');
    this.server = await app.listen('3000');
    console.log('Server listening on port 3000');
  } catch (err) {
    console.log(err);
  }
}

exports.close = async function () {
  await this.server.close();
  await db.close();
}
