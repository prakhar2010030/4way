import { app } from "./index.js";
import connectDb from "./connections/connection.js";

connectDb(); // connecting to db

app.listen(process.env.PORT, () => {
  console.log(`server running at port : ${process.env.PORT}`); // template literal in Js
});
