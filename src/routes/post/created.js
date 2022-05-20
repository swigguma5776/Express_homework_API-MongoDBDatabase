module.exports = async (req, res) => {
    res.render('dashboard', { id: req.params.id })
}