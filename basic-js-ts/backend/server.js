import express from 'express';



const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true}));


app.use((err, req, res, next) => {
  res.status(500).send({message: err.message });
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Serve at http://localhost:${port}`);
});