import * as user from './../src/handlers/user';

describe('user handler', () => {
    it('create a new user', async () => {
        const req = {
            body: {
                username: "test",
                password: "test"
            }
        }

        const res = {
            json (token) {
                expect(token).toBeDefined();
            }
        }

        await user.createNewUser(req, res);
    })
})