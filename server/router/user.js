const { Router } = require("express");
const { PrismaClient } = require("@prisma/client");


const Prisma = new PrismaClient();
const router = Router();

router.post("/reg", async (req, res) => {
    const { user, password } = req.body;

    if(!(user && password)) return res.status(401).json({message: "missing field"});
    const isExist = await Prisma.user.findFirst({
        where: {
            user
        }
    });

    if(isExist) return res.status(401).json({message: "user already exist try to login"});

    const createNew = await Prisma.user.create({
        data: {
            user, password
        }
    });

    return res.json({message: `user create with name ${createNew.user}`});
}) 

module.exports = router;