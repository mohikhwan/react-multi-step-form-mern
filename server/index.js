const path = require('path');
const express = require('express');
const userRouter = require('./routers/user');
// const cors = require('cors');
require('./db');

const app = express();
const PORT = process.env.PORT || 3030;

app.use(express.static(path.join(__dirname, '..', 'build')));
app.use(express.json());
// app.use(cors());
app.use(userRouter);

app.get('/', (req, res) => {
  res.send('<h2>This is from index.js file</h2>');
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});