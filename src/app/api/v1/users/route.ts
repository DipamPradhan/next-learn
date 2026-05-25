import { redirect } from "next/navigation";
import { users } from "./users";

export async function GET() {
  redirect("/api/v2/users");
  return Response.json(users);
}
