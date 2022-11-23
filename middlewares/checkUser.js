const Student = require("../models/students");

const checkUser = (req, res) => {

const token = req.cookies.jwt;
  
//check if jwt token exists
if(token){
  //verify token
  jwt.verify(token, 'secret token string', (err, decodedToken)=>{
    //if verification fails
    if(err){
      res.redirect('/login');
    } else {
      return student = Student.findById(decodedtoken)

    }
  });
} else {//no jwt in cookies
    res.redirect('/login');

}
}
module.export = checkUser