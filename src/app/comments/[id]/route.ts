import { comments } from "../data";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const comment = comments.find((comment) => comment.id === parseInt(id));
  return Response.json(comment);
}

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const comment = comments.find((comment) => comment.id === parseInt(id));
  const update = await request.json();
  const { text } = update;
  if (!comment) {
    return Response.json({ Error: "Comment Not Found" }, { status: 404 });
  }
  return Response.json(comment);
}
