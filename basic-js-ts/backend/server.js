import express from 'express';
import jokeRouter from './routers/jokeRouter.js';
import mongoose from 'mongoose';


const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost/joke', {
  useNewUrlParser:true,
  useUnifiedTopology:true,
  useCreateIndex:true,
});

app.use('/api/jokes', jokeRouter);
app.use((err, req, res, next) => {
  res.status(500).send({message: err.message });
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Serve at http://localhost:${port}`);
});
