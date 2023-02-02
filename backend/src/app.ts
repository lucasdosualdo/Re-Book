import express, { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const GOOGLE_API_KEY = process.env.API_KEY;

const app = express();
app
  .use(express.json())
  .use(cors())
  .get("/status", (req: Request, res: Response) => {
    res.send("ok");
  });

// app.get("/googlebook", async (req: Request, res: Response) => {
//   try {
//     const promise = await axios.get(
//       `https://www.googleapis.com/books/v1/volumes?q=inauthor:machado+de+assis+AND+intitle:dom+casmurro&printType=books&orderBy=newest&key=${GOOGLE_API_KEY}`
//     );
//     return res.status(200).send(promise.data);
//   } catch (error) {
//     return res.status(400).send(error);
//   }
// });

app.listen(process.env.PORT, () => {
  console.log("listening on port " + process.env.PORT);
});
