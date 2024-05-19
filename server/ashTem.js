const { PrismaClient } = require("@prisma/client");
const Prisma = new PrismaClient();


const insertSomeData = async(name, price) => {
    const createFood = await Prisma.food.create({
        data: {
            name,
            price
        }
    })

    console.log('the created food name is', createFood.name);
}


const name = "newFood1";
const price  = 5.12;

insertSomeData(name, price);