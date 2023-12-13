import {Router} from "express";

const router = Router();

function middle1(req, res, next) {
    res.json({msg: "middle1"})
    next();
}

function middle2(req, res, next) {
    res.json({msg: "middle2"});
    next();
}

// product
router.get("/product", [middle1, middle2], (req, res) => {
    
});

router.get("/product/:id", () => {});

router.put("/product/:id", () => {});

router.post("/product", () => {});

router.delete("/product/:id", () => {});


// update
router.get("/update", (req, res) => {
    res.json({message: req.secret_code});
});

router.get("/update/:id", () => {});

router.put("/update/:id", () => {});

router.post("/update", () => {});

router.delete("/update/:id", () => {});


// updatepoint
router.get("/updatepoint", () => {});

router.get("/updatepoint/:id", (req, res) => {});

router.put("/updatepoint/:id", () => {});

router.post("/updatepoint", () => {});

router.delete("/updatepoint/:id", () => {});


export default router;