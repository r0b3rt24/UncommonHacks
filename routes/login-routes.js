const router = require('express').Router();
const passport = require('passport');

router.get('/', (req, res) => {
    res.send('login page');
});

router.get('/google', passport.authenticate('google', {
    scope: ['profile']
}));

router.get('/google/redirect', passport.authenticate('google'), (req, res) => {
    res.send(req.user);	
});



module.exports = router;
