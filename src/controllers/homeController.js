const getController = (req, res) => {
    //Xu ly data
    res.send(`<h1>New World & Controller</h1>`);
  }

const getAbc = (req, res) => {
    res.render('sample.ejs');
}
module.exports = {
    getController,
    getAbc
}