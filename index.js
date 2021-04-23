import express from 'express';
import mongoose from 'mongoose';
import { studentRouter } from './routes/studentRouter.js';
import dotenv from 'dotenv';

const app = express();
dotenv.config();

(async () => {
  try {
    //'mongodb://localhost/grades'
    const ATLASURL = `mongodb+srv://${process.env.USERDB}:${process.env.PWDDB}@api.pb75e.mongodb.net/grades?retryWrites=true&w=majority`;
    console.log(ATLASURL);
    //prettier-ignore
    await mongoose.connect(ATLASURL, {
      useNewUrlParser: true, useUnifiedTopology: true
    });
    console.log('Conectado ao MongoDB');
  } catch (err) {
    console.log('erro ao iniciar MongoDB: ' + err.message);
  }
})();

app.use(express.json());
app.use(studentRouter);

app.listen(process.env.PORT, () => {
  console.log('API iniciada');
});
