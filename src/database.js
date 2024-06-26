import mongoose from "mongoose";

//conexion con mongodb
export async function connect() {
  try {
    await mongoose.connect("mongodb://localhost:27017/mongodbgraphql", {
      useNewUrlParser: true,
    });
    console.log(">>> Connecting to");
  } 
  catch(e) {
    console.log("Something went wrong");
    console.log(e);
  }
}
