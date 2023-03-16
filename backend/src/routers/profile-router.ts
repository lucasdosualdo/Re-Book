import { Router } from "express";
import { signInSchema } from "../schemas/authentication-schemas";
import { validateBody } from "../middlewares/validation-middleware";
import { singInPost } from "../controllers/authentication-controller";
import express, { Request, Response } from "express";
import multer from "multer";
import fs from "fs";
import { cannotRewriteUpalodFile } from "../errors/cannot-rewrite-upload-file-error";
import prisma from "../config/database";

const profileRouter = Router();

const upload = multer({ dest: "./uploads" });
profileRouter.post(
  "/picture",
  upload.single("avatar"),
  async (req: Request, res: Response) => {
    const userId = 7;

    const fileType = req.file.mimetype.split("/")[1];
    const newFilename = req.file.filename + "." + fileType;
    fs.rename(
      `./uploads/${req.file.filename}`,
      `./uploads/${newFilename}`,
      () => {
        console.log("callback"), res.sendStatus(200);
      }
    );
   
  }
);

export { profileRouter };
