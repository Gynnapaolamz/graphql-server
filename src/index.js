import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import schema from "./schema";
import { connect } from "./database";

//Crea una instancia de una aplicación Express
const app = express();
//Llama a la función para conectar a la base de datos.
connect()

//ruta GET endpoint / responde con un mensaje JSON "Hello World"
app.get('/', (req, res) => {
    res.json({
        message: 'Hello World'
    })
});

// configura el middleware express-graphql en el endpoint /graphql
app.use('/graphql', graphqlHTTP({
    graphiql: true, //habilita Graphql para interactuar con la API desde el navegador
    schema: schema, //define el schema
    context: {
        messageId: 'test' //objeto de contexto que estará disponible en los resolvers
    }
}));

//Inicia el servidor en el puerto 3000 
app.listen(3000, () => console.log('listening on'));