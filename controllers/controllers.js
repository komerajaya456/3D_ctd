const Home = (req,res)=>{res.send("home")}

function login(req,res){
    res.send("login done")
}

function log(req,res){
    res.send("log one")
}



const register=(req,res)=>{console.log('hi')}

module.exports=[Home,login,log,register]