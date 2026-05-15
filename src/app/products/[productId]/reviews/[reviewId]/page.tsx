export default async function ProductReviews({
  params,
}: {
  params: Promise<{ productId: string; reviewId: string }>;
}) {
  const { reviewId, productId } = await params;
  return (
    <h1>
      Review {reviewId} for Product {productId}
    </h1>
  );
}
