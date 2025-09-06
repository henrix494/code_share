import express from "express";
import cors from "cors";
import saveCode from "./routers/CodeRoute";
const app = express();
app.use(
  cors({
    origin: ["http://localhost:5173", "https://code-share-ivory.vercel.app"],
  })
);
app.use(express.json());

app.use("/api/saveCode", saveCode);
app.use(express.json());

export default app;
