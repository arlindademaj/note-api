import app from "./app.js";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";

const PORT = 3000;

connectDB();

app.listen(PORT, () => {
  console.log("The server is running on http://localhost:3000");
});
