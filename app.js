//require statements
const express = require("express");
const data = require("./data.json");
const routes = require("./routes");
const errorHandlers = require("./errorHandlers");

// create app
const app = express();
// listen to port
app.listen(3000, ()=> {
    console.log('The app is running on port 3000!');
});

// set template view engine to pug
app.set('view engine', 'pug');

// set static folder
app.use("/static", express.static("public"));

// make data available to all pages
app.use((req, res, next) => {
    app.locals = data;
    next();
});

// set routes
app.use(routes);

// set error handlers
app.use(errorHandlers.routeNotExistentHandler);
app.use(errorHandlers.globalErrorHandler);
