import express from 'express';
import cors from 'cors';
// import db from './database.mjs'
import userRouter from './routes/users.mjs';
import postRouter from './routes/posts.mjs';
import categoryRouter from './routes/categories.mjs'
import commentRouter from './routes/comments.mjs';
import messageRouter from './routes/messages.mjs';
import authRouter from './routes/auth.mjs';






const app = express();
// db.connect()
app.use(express.json());
app.use(cors());
app.use('/api/auth', authRouter)
app.use('/api/user', userRouter)
app.use('/api/posts', postRouter)
app.use('/api/category', categoryRouter)
app.use('/api/comment', commentRouter)
app.use('/api/messages', messageRouter)




















// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  console.log(err)
  res.status(err.status || 500);
  return res.json({
    message: err.message,
    error: err
  });
});
  
export {app}