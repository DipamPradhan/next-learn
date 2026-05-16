import { notFound } from "next/navigation";
export default async function ProductReviews({
  params,
}: {
  params: Promise<{ productId: string; reviewId: string }>;
}) {
  const { reviewId, productId } = await params;
  if (parseInt(reviewId) > 1000) {
    notFound();
  }
  return (
    <h1>
      Review {reviewId} for Product {productId}
    </h1>
  );
}
