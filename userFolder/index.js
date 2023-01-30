import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hello you are at root of userfolderapi link');
})

router.get('/abc', (req, res) => {
    // res.send(new Date());
    console.log('Hello you are at root of userfolderapi link');
    res.send('Shehzad ap user folder me agye ho')
});

export default router;