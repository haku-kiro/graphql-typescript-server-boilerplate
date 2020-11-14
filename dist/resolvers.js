"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = {
    Query: {
        hello: (_, { name }) => `Hello ${name || "World!"}`
    },
    Mutation: {
        register: (_, { email, password }) => `Bye ${email || password || "World"}`
    }
};
//# sourceMappingURL=resolvers.js.map