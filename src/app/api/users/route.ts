import { NextRequest, NextResponse } from "next/server"
import { UserRetrievalService } from "@/services/userRetrievalService"
import { UserCreationService } from "@/services/userCreationService"

const userRetrievalService = new UserRetrievalService()
const userCreationService = new UserCreationService()

export async function GET() {
  try {
    const allUsers = await userRetrievalService.getAllUsers()
    return NextResponse.json(allUsers, { status: 200 })
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 500 })
  }
}

export async function POST() {
  try {
    const newUsers = await userCreationService.createFakeUsers()
    return NextResponse.json(newUsers, { status: 201 })
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 400 })
  }
}