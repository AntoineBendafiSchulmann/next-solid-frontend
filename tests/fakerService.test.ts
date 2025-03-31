import { generateFakeUsers } from "../src/services/fakerService"

describe("fakerService", () => {
    it("génère le nombre d'utilisateurs spécifié", () => {
        const count = 5
        const users = generateFakeUsers(count)
        expect(users).toHaveLength(count)
    })

    it("génère des utilisateurs avec un id, un name et un email", () => {
        const [user] = generateFakeUsers(1)
        expect(typeof user.id).toBe("string")
        expect(typeof user.name).toBe("string")
        expect(typeof user.email).toBe("string")
    })
})
