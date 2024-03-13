const Router = require("express");
const { getPlayers } = require("../controller/controller");
const router = Router();



router.get('/', (req, res) => {
    res.send("using api routing")
})

router.get('/getPlayers', getPlayers);



module.exports = router;