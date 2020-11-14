import { request } from "graphql-request";
import { createConnection } from "typeorm";
import { User } from "../entity/User";
import { host } from "./constants";

const email = "fred@bob.com";
const password = "bobo";

// Test mutation, i.e. the graphql request we'll make to test
// the register user.
const mutation = `
mutation {
    register(email: "${email}", password: "${password}")
}
`;

test("Register user", async () => {
  // Note, the server has to be running to run tests
  // await startServer();
  const response = await request(host, mutation);

  // If the register works - will have a true value
  expect(response).toEqual({ register: true });

  // Check that the user exists in the db
  await createConnection();
  const users = await User.find({where: { email }});
  // only be one user
  expect(users).toHaveLength(1);

  const user = users[0];
  expect(user.email).toEqual(email);

  // we're hashing the password - they should not be the same
  expect(user.password).not.toEqual(password);
});


// use test db
// drop all data once test is over
// Shouldn't have to start server seperately ( should start with test cmd )