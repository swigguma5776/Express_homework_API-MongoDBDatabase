module.exports = async (req, res) => {
    console.log(`this is in dashboard view ${req.verifiedUser.user.posts}`)
    res.render('dashboard', { user: req.verifiedUser.user,
                                        posts: req.posts });
}