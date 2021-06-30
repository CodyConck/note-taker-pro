const router = require('express').Router();
const noteRoute = require('../apiRoutes/noteRoutes');

router.use(noteRoute);

module.exports = router;