import { Router } from "express";
import { body, validationResult } from "express-validator";
import { getProducts, getOneProduct, updateProduct, deleteProduct, createProduct } from "./handlers/product";
import { validationMiddleware } from "./modules/middleware";

const router = Router();

// product
router.get("/product", getProducts);

router.get("/product/:id", getOneProduct);

router.put("/product/:id", body("name").isString(), validationMiddleware, updateProduct);

router.post("/product", createProduct);

router.delete("/product/:id", deleteProduct);


// update
router.get("/update", (req, res) => {
    res.json({ message: req.secret_code });
});

router.get("/update/:id", () => { });

router.put("/update/:id",
    body("title").optional(),
    body("body").optional(),
    body("version").optional(),
    validationMiddleware,
    () => { }
);

router.post("/update", () => { });

router.delete("/update/:id", () => { });


// updatepoint
router.get("/updatepoint", () => { });

router.get("/updatepoint/:id", (req, res) => { });

router.put("/updatepoint/:id", () => { });

router.post("/updatepoint", () => {});

router.delete("/updatepoint/:id", () => { });


export default router;