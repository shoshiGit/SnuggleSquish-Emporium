export const errorHandling=(err, req, res, next) => {
    let statusCode = err.status || 500;
    let message = err.message || "מצטערים התרחשה שגיאה בשרת"
    res.status(statusCode).send({status: statusCode, message: message});
}