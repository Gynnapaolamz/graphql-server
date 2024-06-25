import { tasks } from "./sample";
import User from "./models/User";

export const resolvers = {
    Query: {
        hello: () => {
            return 'Hello world!'
        },
        greet(root, { name }, ctx) {
            console.log(ctx)
            return `Hello ${name}!`;
        },
        tasks() {
            return tasks;
        },
        async Users() {
            return await User.find();
            
        }
    },
    Mutation: {
        createTask(_, { input }) {
            input._id = tasks.length;
            tasks.push(input);
            return input;
        },
        async createUser(_, { input }) {
            const newUser = User(input);
            await newUser.save();
            return newUser;
        }
    }
};