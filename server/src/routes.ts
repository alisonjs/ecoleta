import express from 'express';

const router = express.Router();

router.get('/', (request, response) => {
    return response.json({message: 'Hello World'});
});

export default router;