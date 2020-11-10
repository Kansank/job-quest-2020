import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import data from '../data.js';
import Joke from '../models/jokeModel.js';


const jokeRouter = express.Router();

jokeRouter.get(
  '/',
  expressAsyncHandler(async (req, res) => {
    const jokes = await Joke.find({});
    res.send(jokes);
  })
);

jokeRouter.get(
  '/seed',
  expressAsyncHandler(async (req, res) => {
   // await Joke.remove({});
    const createdJokes = await Joke.insertMany(data.jokes);
    res.send({ createdJokes });
  })
);

jokeRouter.get(
  '/:id',
  expressAsyncHandler(async (req, res) => {
    const joke = await Joke.findById(req.params.id);
    if (joke) {
      res.send(joke);
    } else {
      res.status(404).send({ message: 'Joke Not Found' });
    }
  })
);

jokeRouter.post(
  '/:id/like',
  
  expressAsyncHandler(async (req, res) => {
    const joke = await Joke.findByIdAndUpdate(req.params.id,{"status": "like"}, function(err, result){

      if(err){
          res.send(err)
      }
      else{
          res.send(result)
      }

  })

  })
);

jokeRouter.post(
  '/:id/dislike',
  
  expressAsyncHandler(async (req, res) => {
    const joke = await Joke.findByIdAndUpdate(req.params.id,{"status": "dislike"}, function(err, result){

      if(err){
          res.send(err)
      }
      else{
          res.send(result)
      }

  })

  })
);

jokeRouter.post(
  '/',
  
  expressAsyncHandler(async (req, res) => {
    const joke = new Joke({
      joke: req.body.joke,
      categories: req.body.categories,
      status: '',
     
    });
    const createdJoke = await joke.save();
    res.send({ message: 'Joke Created', joke: createdJoke });
  })
);


jokeRouter.delete(
  '/:id',
 
  expressAsyncHandler(async (req, res) => {
    const joke = await Joke.findById(req.params.id);
    if (joke) {
      const deleteJoke = await joke.remove();
      res.send({ message: 'Joke Deleted', joke: deleteJoke });
    } else {
      res.status(404).send({ message: 'Joke Not Found' });
    }
  })
);

export default jokeRouter;
