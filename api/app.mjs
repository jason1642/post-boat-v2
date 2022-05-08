import express from 'express';
import cors from 'cors';
import authRouter from './routes/auth.mjs';
import categoryRouter from './routes/categories.mjs'
import commentRouter from './routes/comments.mjs';
import messageRouter from './routes/messages.mjs';
import postRouter from './routes/posts.mjs';
import userRouter from './routes/users.mjs';
import path from 'path'


import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const app = express();





app.use(express.json());
app.use(cors());



console.log(process.env.NODE_ENV)

if (process.env.NODE_ENV === "production") {
  app.use(express.static("../build"));

  
}



app.get('/*', (req, res) => {
  app.use(express.static("../build"));
  res.send(req)
})

app.use('/api/auth', authRouter)
app.use('/api/category', categoryRouter)
app.use('/api/comment', commentRouter)
app.use('/api/messages', messageRouter)
app.use('/api/posts', postRouter)
app.use('/api/user', userRouter)





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