export default async function ReviewList({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  const { productId } = await params;
  return <h1>Reviews for product {productId}</h1>;
}
