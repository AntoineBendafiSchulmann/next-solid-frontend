import { NextRequest, NextResponse } from "next/server"
import { generateFakeUsers } from "@/services/fakerService"
import { usersSchema } from "@/validation/userSchema"
import { prisma } from "@/services/db"

export async function GET(req: NextRequest) {
    const users = generateFakeUsers(5)

    const parseResult = usersSchema.safeParse(users)
    if (!parseResult.success) {
        return NextResponse.json({ error: parseResult.error.message }, { status: 400 })
    }

    //await prisma.user.deleteMany()
    await prisma.user.createMany({ data: parseResult.data })

    const allUsersInDB = await prisma.user.findMany()
    return NextResponse.json(allUsersInDB, { status: 200 })
}
