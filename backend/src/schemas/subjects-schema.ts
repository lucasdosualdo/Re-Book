import Joi, { object } from "joi";
import { SubjectParams } from "../protocols";

const SUBJECTS = Object.freeze({
  ROMANCE: "romance",
  FANTASY: "fantasy",
  FICTION: "fiction",
  HORROR: "horror",
  SCIENCE: "science",
  HUMOR: "humor",
  HISTORY: "history",
});

const allowedSubjects = [
  SUBJECTS.ROMANCE,
  SUBJECTS.FANTASY,
  SUBJECTS.FICTION,
  SUBJECTS.HORROR,
  SUBJECTS.SCIENCE,
  SUBJECTS.HUMOR,
  SUBJECTS.HISTORY,
];

export const subjectsSchema = Joi.object<SubjectParams>({
  subject: Joi.string()
    .valid(...allowedSubjects)
    .required(),
});
