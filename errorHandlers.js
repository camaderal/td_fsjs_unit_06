/*
* 404 and Global Error Handlers
*/

// Error handler for handling non-existent routes
const routeNotExistentHandler = (req, res, next) => {
    // Create new error to handle non-existent routes
    const err = new Error();
    err.status = 404;
    err.message = "Page not found. Looks like that route does not exist.";
  
    next(err);
};
  
  // Global error handler
  const globalErrorHandler = (err, req, res, next) => {
    // Set error status. If not set, set to 500
    err.status = err.status || 500;

    // Set error message. If not set, set to default.
    err.message = err.message || "Something went wrong!";

    //print error on console
    console.error(err);
    
    // set response error status
    res.status(err.status);
    res.render("error", {err});
  };
  
  module.exports = {routeNotExistentHandler, globalErrorHandler};