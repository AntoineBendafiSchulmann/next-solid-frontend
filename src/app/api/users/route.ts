import { NextRequest, NextResponse } from "next/server"
import { generateFakeUsers } from "@/services/fakerService"
import { usersSchema } from "@/validation/userSchema"

export async function GET(req: NextRequest) {

  const users = generateFakeUsers(5)

  const parseResult = usersSchema.safeParse(users)
  if (!parseResult.success) {
    return NextResponse.json({ error: parseResult.error.message }, { status: 400 })
  }

  return NextResponse.json(parseResult.data, { status: 200 })
}
