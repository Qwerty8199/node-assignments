
// export class MyError extends Error{
//     constructor(message,statusCode){
//         super(message);
//         this.statusCode = statusCode
//     }
// }

// export const ErrorHandler = (err, req, res, next) =>{
//     console.err(err.stack)

//     const errStatus = err.status || 500
//     const errMsg = err.message || 'Something went Wrong..' 

//     res.status(errStatus)
//         .json({
//             success: false,
//             status: errStatus,
//             message: `Error - ${errMsg}`
//         })
// }