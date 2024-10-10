import express from "express";
import mongoose from "mongoose";
import router from "./Routes/firstRouter.js";
import cors from 'cors'

const app = express();
app.use(express.json());
app.use(cors());
try {
  mongoose.connect("mongodb+srv://Rahul:Rahul123*@rahulcluster0.gzbxtty.mongodb.net/Firebase_Auth?retryWrites=true&w=majority&appName=RahulCluster0"
    )
    .then(() => {
      console.log("Mongoose Connected");
    });

  app.listen(4000, () => {
    console.log(`Server connected on 4000 `);
  });
} catch (error) {
  console.log(error);
}

app.use("/api", router);
