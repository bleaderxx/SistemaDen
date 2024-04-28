"use strict";

var _express = _interopRequireDefault(require("express"));
var _authRoutes = _interopRequireDefault(require("./routes/auth.routes.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
//const express = require("express");

require('dotenv').config();
const app = (0, _express.default)();

//habilitamos las rutas con express (app)
app.use("/api", _authRoutes.default);
const PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
  console.log(`Servidor iniciado en: http://127.0.0.1:${PORT}`);
});