
// all this functions use in router to run in finit route


function home(req,res){
    res.render('Home.ejs')
}

function contact(req, res) {
  res.render('Contact.ejs');
}

function about(req, res) {
  res.render("About.ejs");
}

function samplepost(req, res) {
  res.render("Samplepost.ejs");
}







module.exports={
    home, 
    contact,
    about,
    samplepost

}