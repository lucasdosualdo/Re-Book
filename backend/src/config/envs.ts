import dotenv from "dotenv";
import dotenvExpand from "dotenv-expand";

export function loadEnvs() {
  let path = ".env";
  if (process.env.NODE_ENV === "test") {
    path = ".env.test";
  }
  if (process.env.NODE_ENV === "development") {
    path = ".env.development";
  }

  const currenEnvs = dotenv.config({ path });
  dotenvExpand.expand(currenEnvs);
}
