import express from "express";
import dotenv from "dotenv";
import cors from "cors"
import userRouter from "./Routes/userRoutes.js"

//app instance
export const app = express();

app.use(express.json());

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(
  cors({
    origin: "*",
  })
);

dotenv.config({
    path:"./config/config.env"
})


app.use("/api",userRouter);




app.get("/", (req, res, next) => {
  res.send("Server is working");
});

// app.post("/hello",(req,res,next)=>{
//   console.log("hello");
// })


// app.use(errorMiddleware);
