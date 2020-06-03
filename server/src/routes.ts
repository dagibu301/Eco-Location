import express from 'express';

const routes = express.Router();

routes.get('/', (req, res) => {
    

    return res.json({'Grreetin': 'Hello'});
});

export default routes;