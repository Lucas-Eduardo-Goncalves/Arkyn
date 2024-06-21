import { v4 } from "uuid";

function uuid(): string {
  return v4();
}

export { uuid };
