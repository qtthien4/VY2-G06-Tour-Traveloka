class signUpController{
    index(req,res){
        res.render('signup');
    }
}

module.exports = new signUpController