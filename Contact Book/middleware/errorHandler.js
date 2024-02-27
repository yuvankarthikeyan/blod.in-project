const constant = require("../constants");
const errorHandler = (err,req,res,next) =>{
    const statusCode = res.statusCode ? res.statusCode : 500;
    switch(statusCode){
        case constant.VALIDATION_ERROR:
            res.json({
                title : "Validation error",
                message : err.message,
                stackTrace : err.stack
            })
            break;
        case constant.NOT_FOUND:
            res.json({
                title : "not found",
                message : err.message,
                stackTrace : err.stack
            })
            break;
         case constant.UNAUTHORIZED:
             res.json({
                    title : "UnAuthorized",
                    message : err.message,
                    stackTrace : err.stack
            })
            break;
        case constant.FORBIDDEN:
                res.json({
                       title : "Forbidden",
                       message : err.message,
                       stackTrace : err.stack
               })
            break;
        case constant.SERVER_ERROR:
                res.json({
                       title : "SERVER ERROR",
                       message : err.message,
                       stackTrace : err.stack
                })
            break;
        default:
            console.log("No error");
            break;


    }
    
    
};

module.exports = errorHandler;