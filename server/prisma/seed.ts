import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main(){
    const user = await prisma.user.create({
        data: {
            name: 'John Doe',
            email: 'john.doe@gmail.com',
            avatarUrl: 'https://github.com/lucascc19.png',
        }
    })

    const pool = await prisma.pool.create({
        data: {
            title: 'Exemple Pool',
            code: 'BOL123',
            ownerId: user.id,
        }
    })

    const participant = await prisma.participant.create
}

main()