import { faker } from "@faker-js/faker"

export function generateFakeUsers(count: number) {
  const users = []
  for (let i = 0; i < count; i++) {
    const user = {

        id: faker.string.uuid(),
        name: faker.person.fullName(),
        email: faker.internet.email(),
    }
    users.push(user)
  }
    return users
}
