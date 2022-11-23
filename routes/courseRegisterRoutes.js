const {Router} = require('express');
const courseRegister = require('../controllers/couresregistercontroller')

// create router object
const router = Router()

// routes
router.get('/register', courseRegister.register_course_get);
router.post('/register', courseRegister.register_course_post);

module.exports = router;