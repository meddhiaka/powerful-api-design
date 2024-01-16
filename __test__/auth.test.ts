import { createJWT } from "../src/modules/auth";

describe("creating payload using jwt", () => {
    it("it should return jwt token", () => {
        const payload = {
            id: 1,
            username: "test"
        }
        const token = createJWT(payload);
        expect(token).toBeDefined();
    })
})