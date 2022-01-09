"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = require("dotenv");
const mongoose_1 = __importDefault(require("mongoose"));
const products_1 = __importDefault(require("./routes/products"));
const users_1 = __importDefault(require("./routes/users"));
const cors_1 = __importDefault(require("cors"));
(0, dotenv_1.config)();
mongoose_1.default.connect(process.env.DB_CONNECT, (error) => {
    console.log('Connected to the MongoDB server');
});
const app = (0, express_1.default)();
const PORT = process.env.PORT || 5000;
app.use((0, cors_1.default)({
    origin: ['http://localhost:3000'],
    credentials: true,
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Set-Cookie'],
}));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((req, res, next) => {
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
app.listen(PORT, () => {
    console.log(`The server is listening at http://localhost:${PORT}`);
});
