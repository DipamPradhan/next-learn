import { StaticImageData } from "next/image";
import photo1 from "./photos/1.png";
import photo2 from "./photos/2.png";
import photo3 from "./photos/3.png";
import photo4 from "./photos/4.png";
import photo5 from "./photos/5.png";
import photo6 from "./photos/6.png";
import photo7 from "./photos/7.png";

export type OnepieceImage = {
  id: string;
  name: string;
  src: StaticImageData;
  photographer: string;
  location: string;
};

const onepieceImages: OnepieceImage[] = [
  {
    id: "1",
    name: "Luffy 1",
    src: photo1,
    photographer: "Photo by Zoro",
    location: "Red Line",
  },
  {
    id: "2",
    name: "Luffy 2",
    src: photo2,
    photographer: "Photo by Zoro",
    location: "Red Line",
  },
  {
    id: "3",
    name: "Luffy 3",
    src: photo3,
    photographer: "Photo by Zoro",
    location: "Red Line",
  },
  {
    id: "4",
    name: "Luffy 4",
    src: photo4,
    photographer: "Photo by Zoro",
    location: "Red Line",
  },
  {
    id: "5",
    name: "Luffy 5",
    src: photo5,
    photographer: "Photo by Zoro",
    location: "Red Line",
  },
  {
    id: "6",
    name: "Luffy 6",
    src: photo6,
    photographer: "Photo by Zoro",
    location: "Red Line",
  },
  {
    id: "7",
    name: "Luffy 7",
    src: photo7,
    photographer: "Photo by Zoro",
    location: "Red Line",
  },
];

export default onepieceImages;
