import express, { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import {
  authenticationRouter,
  usersRouter,
  searchBooksRouter,
  subjectsRouter,
  profileRouter,
} from "./routers";
import { handleApplicationErrors } from "./middlewares/error-handling-middleware";

dotenv.config();
const GOOGLE_API_KEY = process.env.API_KEY;

const app = express();
app
  .use(express.json())
  .use(cors())
  .get("/status", (req: Request, res: Response) => {
    res.send("ok");
  })
  .use("/users", usersRouter)
  .use("/auth", authenticationRouter)
  .use("/search", searchBooksRouter)
  .use("/subjects", subjectsRouter)
  .use("/profile", profileRouter)
  .use(handleApplicationErrors);

app.listen(process.env.PORT, () => {
  console.log("listening on port " + process.env.PORT);
});

export default app;
