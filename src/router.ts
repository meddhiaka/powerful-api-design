import {Router} from "express";
import { body, validationResult } from "express-validator";
import { getProducts, getOneProduct, updateProduct, deleteProduct, createProduct } from "./handlers/product";

const router = Router();

// product
router.get("/product", getProducts);

router.get("/product/:id", getOneProduct);

router.put("/product/:id", updateProduct);

router.post("/product", createProduct);

router.delete("/product/:id", deleteProduct);


// update
router.get("/update", (req, res) => {
    res.json({message: req.secret_code});
});

router.get("/update/:id", () => {});

router.put("/update/:id", body("name").isString(), (req, res) => {
    const errors = validationResult(req);
    res.status(200).json({errors: errors.array()});
    if(!errors.isEmpty()) {
        res.status(400).json({errors: errors.array()});
    }
});

router.post("/update", () => {});

router.delete("/update/:id", () => {});


// updatepoint
router.get("/updatepoint", () => {});

router.get("/updatepoint/:id", (req, res) => {});

router.put("/updatepoint/:id", () => {});

router.post("/updatepoint", () => {});

router.delete("/updatepoint/:id", () => {});


export default router;