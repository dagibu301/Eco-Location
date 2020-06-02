import express from 'express';

const app = express();

const users = [
    'David',
    'Eliana',
    'Wasabina'
];

app.get('/users', (req, res) => {
    console.log('User List');

    return res.json(users);
});

app.get('/users/:id', (req, res) => {
    console.log('Unique User');
    const id = Number(req.params.id);

    return res.json(users[id]);
});

app.post('/users',(req,res) => {
    const user = {
        name: 'David',
        lastname: 'Giraldo'
    };

    return res.json(user);
});

app.listen(3333);