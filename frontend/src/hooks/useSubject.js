export function useSubject(title) {
  const SUBJECTS = Object.freeze({
    Romance: "romance",
    Fantasia: "fantasy",
    Ficção: "fiction",
    Horror: "horror",
    Ciência: "science",
    Humor: "humor",
    História: "history",
  });
  const subject = SUBJECTS[title];
  if (!subject) throw new Error("Subject not found");
  return subject;
}
