import express from 'express';
import path from 'path';
import ejs from 'ejs';
import * as DefaultController from './controllers/DefaultController';
const app = express();

app.set('port', process.env.PORT || 3000);
app.set('env', process.env.NODE_ENV || 'development');

app.set('views', path.join(__dirname, '../views'));
app.engine('html', ejs.renderFile);
app.set('view engine', 'html');

app.use(express.static(path.join(__dirname, 'public'), { maxAge: 31557600000 }));

app.get('/', DefaultController.index);

export default app;
