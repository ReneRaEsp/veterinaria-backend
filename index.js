import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';

const app = express();

app.set('port', process.env.PORT || 3000);
app.use(morgan("dev"));
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(__dirname + "/public"));

app.listen(app.get('port'),()=>{
    console.log('server on port: ' +  app.get('port'));
});

