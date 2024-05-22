const { Router } = require("express");
const { PrismaClient } = require("@prisma/client");


const Prisma = new PrismaClient();
const router = Router();

router.post("/reg", async (req, res) => {
    const { user, password } = req.body;

    if(!(user && password)) return res.status(401).json({message: "missing field"});
    const isExist = await Prisma.users.findFirst({
        where: {
            user
        }
    });

    if(isExist) return res.status(401).json({message: "user already exist try to login"});

    const createNew = await Prisma.users.create({
        data: {
            user, password
        }
    });

    return res.json({message: `user create with name ${createNew.user}`});
});

router.post("/login", async (req, res) => {
    const { user, password  } = req.body;

    
    if(!(user && password)) return res.status(401).json({message: "missing field"});
    const isExist = await Prisma.users.findFirst({
        where: {
            user
        }
    });

    if(!isExist) return res.status(401).json({message:`user does not exist with name: ${user}`  });

    if(isExist.password == password) return res.json({message: `user logged in`});
    return res.json({message: "password is wrong!"});
})

module.exports = router;