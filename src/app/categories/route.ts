import { categories } from "./categories";
export const dynamic = "force-static";
export async function GET() {
  return Response.json(categories);
}
