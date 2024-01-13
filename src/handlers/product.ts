import prisma from "../modules/db";

// get all of a unique user X :)
export async function getProducts(req, res) {
    const result = await prisma.user.findUnique({
        where: {
            id: req.user.id
        },
        include: {
            products: true
        }
    })
    
    if (!result) {
        res.status(404).json({
            message: "no products found"
        })
    }

    res.json({
        products: result.products
    })
}


// get first product of a unique user
export async function getOneProduct(req, res) {
    const id = req.params.id;
    const product = await prisma.product.findFirst({
        where: {
            id,
            belongsToId: req.user.id
        }
    })

    res.json({
        resData: product
    })
}


// create a new product for a unique user
export async function createProduct(req, res) {
    const createdProduct = await prisma.product.create({
        data: {
            name: req.body.name,
            belongsToId: req.user.id
        }
    })

    res.json({ createdProduct });
}

export async function updateProduct(req, res) {
    const id = req.params.id;
    const { name } = req.body.name;
    const updateProduct = await prisma.product.update({
        where: {
            id
        },
        data: {
            name
        }
    })

    res.json({ updateProduct });
}

export async function deleteProduct(req, res) {
    const id = req.params.id;
    const deletedProduct = await prisma.product.delete({
        where: {
            id
        }
    })

    req.json({ deletedProduct });
}


