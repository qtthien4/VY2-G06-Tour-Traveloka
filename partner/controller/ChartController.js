
class ChartController{
    index(req, res) {
        res.render('charts');
    }
}

module.exports = new ChartController