import { users } from "./users";

export async function GET() {
  return Response.json(users);
}
