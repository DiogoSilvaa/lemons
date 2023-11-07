import { createTRPCRouter } from "./trpc"
import { publicProcedure } from "./trpc"
import { PrismaClient } from "database"

const prisma = new PrismaClient()

export const appRouter = createTRPCRouter({
  createQuestion: publicProcedure.query(async () => {
    return await prisma.questions.create({
      data: {
        name: "Hello",
        question: "How are you ?"
      }
    })
  }),
  getQuestion: publicProcedure.query(async () => {
    return await prisma.questions.findMany()
  })
})

// export type definition of API
export type AppRouter = typeof appRouter
