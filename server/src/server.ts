import express from 'express';

const app = express();

app.use(express.json());

const users = [
    'David',
    'Eliana',
    'Wasabina'
];

app.get('/users', (req, res) => {
    const search = String(req.query.search);
    const filteredUsers = search ? users.filter(user => user.includes(search)) : users;
    console.log(filteredUsers);

    return res.json(filteredUsers);
});

app.get('/users/:id', (req, res) => {
    console.log('Unique User');
    const id = Number(req.params.id);

    return res.json(users[id]);
});

app.post('/users',(req,res) => {

    const data = req.body;

    const user = {
        name: data.name,
        lastname: data.lastname
    }

    return res.json(user);
});

app.listen(3333);