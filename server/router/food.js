const { Router } = require("express");
const { PrismaClient } = require("@prisma/client");


const Prisma = new PrismaClient();
const router = Router();

// name => foodName

router.post("/addFood", async( req, res ) => {
    let { name, price } = req.body;
    price = parseFloat(price);
    //console.log(name, price);
    const already = await Prisma.food.findFirst({
        where: {
            name
        }
    })
    //console.log(already);
    if(already) return res.json({message: "food already exists"});

    const newFood = await Prisma.food.create({
        data:{
            name,
            price
        }
    })

    res.json({message : `food ${newFood.name} which $${newFood.price} is added.`});
})

router.post("/editFood", async( req, res ) => {
    let { name, price } = req.body;
    price = parseFloat(price);
    const alreadyExist = await Prisma.food.findFirst({
        where: {
            name
        }
    });

    if(!alreadyExist) return res.json({message: "create food first"});

    const editedFood = await Prisma.food.update({
        where : {
            id: alreadyExist.id,
            name
        },
        data : {
            price
        }
    })
    return res.json({
        message : `food price has been changed to ${editedFood.price}` 
    })
})

router.get("/allFood", async ( req, res ) => {
    let foods = await Prisma.food.findMany();
    foods = foods.map(item => {return {food: item.name, price: item.price}});
    return res.json(foods);
})


router.post("/deleteFood", async( req, res ) => {
    const { name } = req.body;
    const alreadyExist = await Prisma.food.findFirst({
        where: {
            name
        }
    });

    if(!alreadyExist) return res.json({message: "create food first"});
    const deletedFood = await Prisma.food.delete({
        where : {
            id : alreadyExist.id,
            name
        }
    })
    return res.json({DeletedFood : `food ${deletedFood.name} is deleted`});
})

module.exports = router;