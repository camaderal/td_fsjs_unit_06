const express = require("express");
const router = express.Router();

router.get("/", (req, res) =>{
    res.render("index");
});

router.get("/about", (req, res) =>{
    res.render("about");
});

router.get("/project/:id", (req, res) =>{
    const project = req.app.locals.projects.find(project => project.id === req.params.id);
    if(project){
        res.render("project", {project});
    }else{
        const err = new Error();
        err.message = "Project Not Found";
        err.status = 404;
        throw err;
    }
});
module.exports = router;