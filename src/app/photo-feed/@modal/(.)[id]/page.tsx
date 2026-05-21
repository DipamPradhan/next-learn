import Image from "next/image";

import onepieceImages, { OnepieceImage } from "@/app/photo-feed/onepiece";
import Modal from "@/components/modal";
export default async function PhotoPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const photo: OnepieceImage = onepieceImages.find((p) => p.id === id)!;
  return (
    <Modal>
      <Image
        alt={photo.name}
        src={photo.src}
        className="w-full object-cover aspect-square"
      />
      <div className="bg-white py-4">
        <h2 className="text-xl font-semibold">{photo.name}</h2>
        <h3>{photo.photographer}</h3>
        <h3>{photo.location}</h3>
      </div>
    </Modal>
  );
}
