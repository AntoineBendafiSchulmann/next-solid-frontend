import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function main() {
  const users = await prisma.user.findMany()
  console.log("It works, users =>", users)
}

main().catch((e) => console.error(e))