const express = require("express")
const router = express.Router()

// Rotas
router.get('/', (req, res) =>{
    res.render("admin/index")
})
router.get('/ficha', (req,res) => {
    res.send("Pagina de ficha")
})


module.exports = router