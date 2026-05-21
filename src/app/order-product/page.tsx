"use client";

import { useRouter } from "next/navigation";

export default function OrderProduct() {
  const router = useRouter();
  const handleOrder = () => {
    console.log("Placing an Order");
    router.push("/");
  };
  return (
    <>
      <h2>Order Product</h2>
      <button onClick={handleOrder}>Place Order</button>
    </>
  );
}
