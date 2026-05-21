import Link from "next/link";
import onepieceImages from "./onepiece";
import Image from "next/image";

export default function () {
  return (
    <main className="container mx-auto">
      <h1 className="text-center text-3xl font-bold my-4">Onepiece Luffy</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {onepieceImages.map(({ id, src, name }) => {
          return (
            <Link key={id} href={`/photo-feed/${id}`}>
              <Image
                alt={name}
                src={src}
                className="w-full object-cover aspect-square"
              />
            </Link>
          );
        })}
      </div>
    </main>
  );
}
