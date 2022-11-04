import Fastify, { fastify } from "fastify";
import cors from '@fastify/cors';
import { z } from 'zod';
import ShortUniqueId from 'short-unique-id';
import { poolRoutes } from "./routes/pool";
import { userRoutes } from "./routes/user";
import { guessRoutes } from "./routes/guess";

async function bootstrap(){
    const fastify = Fastify({
        logger: true,
    })

    await fastify.register(cors, {
        origin: true,
    })
    
    fastify.register(poolRoutes)

    fastify.register(userRoutes)

    fastify.register(guessRoutes)

    

    await fastify.listen({ port:3333, host: '0.0.0.0' })
}


bootstrap()