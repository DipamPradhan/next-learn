import { Card } from "@/components/card";
import Link from "next/link";
export default function ArchivedNotifications() {
  //   await new Promise((resolve) => {
  //     setTimeout(() => {
  //       resolve("intentional delay");
  //     }, 2000);
  //   });
  return (
    <Card>
      <div>Archived Notifications</div>
      <Link href="/dashboard/">Default</Link>
    </Card>
  );
}
