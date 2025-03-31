import { prisma } from "./db"
import { usersSchema } from "@/validation/userSchema"

export class UserRetrievalService {
  async getAllUsers() {
    const users = await prisma.user.findMany()

    const parseResult = usersSchema.safeParse(users)
    if (!parseResult.success) {
      console.error("Erreur de validation des données récupérées", parseResult.error)
      throw new Error("Les données récupérées ne sont pas valides.")
    }

    return parseResult.data
  }
}