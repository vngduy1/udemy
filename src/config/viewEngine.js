const path = require('path');
const express = require('express')

const configViewEngine = (app) => {
    //Can tim kiem view engine o dau
    app.set("views", path.join('src','views'));
    //khai bao dung template engine nao
    app.set("view engine", "ejs");
    //config static file
    app.use(express.static(path.join('src', 'public')))
}

module.exports = configViewEngine;