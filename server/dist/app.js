"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var dotenv_1 = require("dotenv");
var mongoose_1 = __importDefault(require("mongoose"));
var products_1 = __importDefault(require("./routes/products"));
var users_1 = __importDefault(require("./routes/users"));
var auth_1 = __importDefault(require("./routes/auth"));
var cors_1 = __importDefault(require("cors"));
(0, dotenv_1.config)();
mongoose_1.default.connect(process.env.DB_CONNECT, function (error) {
    console.log('Connected to the MongoDB server');
});
var app = (0, express_1.default)();
var PORT = process.env.PORT || 5000;
app.use((0, cors_1.default)({
    origin: ['http://localhost:3000'],
    credentials: true,
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Set-Cookie'],
}));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(function (req, res, next) {
    try {
        next();
    }
    catch (err) {
        console.log(err);
        return res.status(500).send(err);
    }
});
app.use('/products', products_1.default);
app.use('/users', users_1.default);
app.use('/auth', auth_1.default);
app.listen(PORT, function () {
    console.log("The server is listening at http://localhost:".concat(PORT));
});
// USER AUTH
// ADMIN
// DEALS
// ORDERING
