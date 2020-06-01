import express from 'express';

const app = express();

app.get('/users', (req, res) => {
    console.log('User List');

    res.json({ Message: 'Hello World2!' });
});

app.listen(3333);