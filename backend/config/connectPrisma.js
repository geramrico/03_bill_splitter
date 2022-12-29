const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

const connectPrisma = async () => {
    try {
        const conn = await prisma.$connect()
    } catch (error) {
        console.log(error);
        await prisma.$disconnect()
        process.exit(1)

    }
}

module.exports = connectPrisma

