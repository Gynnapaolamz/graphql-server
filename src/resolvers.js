import { tasks } from "./sample";
import User from "./models/User";

// Define los resolvers para las operaciones de consulta de Query Y Mutation
export const resolvers = {
    Query: {
        hello: () => {
            return 'Hello world!'
        },
        greet(root, { name }, ctx) {
            console.log(ctx)
            return `Hello ${name}!`;
        },
        //Devuelve el array de tareas importado desde ./sample
        tasks() {
            return tasks;
        },
        //Devuelve lista de usuarios de MongoDB
        async Users() {
            return await User.find();
        }
    },
    //asigna un ID a la nueva tasks, añade nueva tarea al array 'tasks' y devuelve la nueva tarea
    Mutation: {
        createTask(_, { input }) {
            input._id = tasks.length;
            tasks.push(input);
            return input;
        },
        //Crea una nueva instancia de 'User', guarada el nuevo usuario, devuelve el usuario
        async createUser(_, { input }) {
            const newUser = User(input);
            await newUser.save();
            return newUser;
        }
    }
};