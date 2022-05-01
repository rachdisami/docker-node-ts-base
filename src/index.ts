import express from 'express';
import path from 'path';

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req:any, res:any) => {
  res.render('index');
})

const server = app.listen(4000, () => {
  console.log(`The application started on port :4000`);
});
