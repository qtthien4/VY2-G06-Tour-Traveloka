
class ChartController{
    index(req, res) {
        res.render('chart');
    }
}

module.exports = new ChartController