import express from 'express';
import mongoose from 'mongoose';
import { studentRouter } from './routes/studentRouter.js';

const app = express();

require('dotenv').config();

(async () => {
  try {
    //'mongodb://localhost/grades'
    await mongoose.connect(
      `mongodb+srv://${process.env.USERDB}:${process.env.PWDDB}@api.pb75e.mongodb.net/grades?retryWrites=true&w=majority`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log('Conectado ao MongoDB');
  } catch (err) {
    console.log('erro ao iniciar MongoDB: ' + err);
  }
})();

app.use(express.json());
app.use(studentRouter);

app.listen(process.env.PORT, () => {
  console.log('API iniciada');
});
