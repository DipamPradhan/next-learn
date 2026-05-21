import { notFound, redirect } from "next/navigation";

const getRandomInt = (count: number) => {
  return Math.floor(Math.random() * count);
};
export default async function ProductReviews({
  params,
}: {
  params: Promise<{ productId: string; reviewId: string }>;
}) {
  const random = getRandomInt(2);
  if (random === 1) {
    throw new Error("Error loading review");
  }
  const { reviewId, productId } = await params;
  if (parseInt(reviewId) > 1000) {
    // notFound();
    redirect("/products");
  }
  return (
    <h1>
      Review {reviewId} for Product {productId}
    </h1>
  );
}
