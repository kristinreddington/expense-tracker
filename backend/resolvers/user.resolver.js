import { users } from '../dummyData/data.js';
const userResolver = {
    Query: {
        user: () =>  {
            return users;
        },
        user: (_, { userId }) => {
            return users.find((user) => user._id === userId);
        },
    },
    Mutation: {},
};

export default userResolver;