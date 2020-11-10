import mongoose from 'mongoose';

const jokeSchema = new mongoose.Schema(
  {
    
    joke: { type: String, required: true },
    categories: { type: String},
    status: { type: String},
  },  
  {
    timestamps: true,
  }
);
const Joke = mongoose.model('Joke', jokeSchema);

export default Joke;
