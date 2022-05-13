class ListVoucherController{
    index(req, res) {
        res.render('listvoucher');
    }
}

module.exports = new ListVoucherController