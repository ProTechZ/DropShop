"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Product_1 = __importDefault(require("../models/Product"));
const router = (0, express_1.Router)();
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { category } = req.query;
    if (category) {
        const productsWithCategory = yield Product_1.default.find({ category });
        return res.send(productsWithCategory);
    }
    else {
        const allProducts = yield Product_1.default.find();
        return res.send(allProducts);
    }
}));
router.get('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const productWithID = yield Product_1.default.findOne({ _id: id });
    res.send(productWithID);
}));
router.post('/create', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, category, description, image, price } = req.body;
    try {
        const productWithSameTitle = yield Product_1.default.findOne({ title });
        if (productWithSameTitle) {
            return res
                .status(409)
                .send(`A product with the title "${title}" already exist`);
        }
        const newProduct = yield Product_1.default.create({
            title,
            category,
            description,
            image,
            price: +price,
        });
        const savedProduct = yield newProduct.save();
        return res.send(`The new product's id is ${savedProduct._id}`);
    }
    catch (err) {
        console.log(err);
        return res.status(500).send(err);
    }
}));
exports.default = router;
