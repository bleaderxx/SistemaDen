//const express = require("express");
import express from "express";
const app = express();

const PORT = process.env.PORT || 3000;

app.listen(PORT, function(){
    console.log(`Servidor iniciado en: http://127.0.0.1:${PORT}`);
});