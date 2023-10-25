import express from "express";
import morgan from "morgan";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";


dotenv.config({ path: "./configenv.env" });



mongoose
  .connect('mongodb+srv://legalmo:kQvhWA0S69hkOXTY@legalmo.n5ltuv1.mongodb.net/legalmodb?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("Database connection is established"))
  .catch((err) => console.log(err.message));
const port = 5005;
const app = express();


// Middleware
app.use(morgan("tiny"));
app.use(express.urlencoded({extended: false}))
app.use(express.json());
app.use(cors());

//  app.use('/', lawyerRouter)


app.use(
  cors({
    origin: "http://localhost:5005",
  })
);

// // error handler
// app.use(globalErrorHandler);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
