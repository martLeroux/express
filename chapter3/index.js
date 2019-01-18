const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  res.render('index', { title: 'Express' });
});

/* GET home page. */
router.get('/:text', (req, res) => {
    res.render('index', { title: req.params.text });
});

router.post('/login', (req, res) => {
    res.render('index', { 
        title: 'Login', 
        user: {
            username: req.body.username
        }
    });
});

module.exports = router;