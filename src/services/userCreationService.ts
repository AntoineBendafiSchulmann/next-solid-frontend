import { prisma } from "./db"
import { generateFakeUsers } from "./fakerService"
import { usersSchema } from "@/validation/userSchema"

export class UserCreationService {
  async createFakeUsers() {
    const users = generateFakeUsers(5)

    const parseResult = usersSchema.safeParse(users)
    if (!parseResult.success) {
      throw new Error("Les données générées ne sont pas valides", parseResult.error)
    }

    await prisma.user.createMany({ data: parseResult.data })

    return prisma.user.findMany()
  }
}