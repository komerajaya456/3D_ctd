const express=require("express")
const router=express.Router()

const [Home,login,register]=require("../controllers/controllers")

router.get('/',Home)

router.get('/login',login)

router.post('/register',register)

module.exports=router