export const authUser = async (req, res) => {

}
export const authAdmin = async (req, res, next) => {
    if (req.user && req.user.role === 'admin') {
        console.log(req.user.role)
        next();
    } else {
        res.status(403).send('Access denied. Admin only.');
    }
};
