const express = require("express")
const router = express.Router()

router.get("fichas", (req, res)=>{
    res.render("personal/fichas")
})

router.get("fichas/add",(req, res)=>{
    res.render("personal/addfichas")
})

module.exports = router