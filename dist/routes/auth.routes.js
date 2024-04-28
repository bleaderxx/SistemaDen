"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _express = require("express");
var _authController = _interopRequireDefault(require("../controllers/auth.controller.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const Route = (0, _express.Router)();
Route.post('/auth/login', _authController.default.login);
Route.post('/auth/registro', _authController.default.registro);
Route.get('/auth/perfil', _authController.default.perfil);
Route.get('/auth/salir', _authController.default.logout);
var _default = exports.default = Route;