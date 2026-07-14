import Image from "next/image";

type Entry = { name: string; behavior: string; biomes: string[]; image: string };

type GalleryCardProps = {
  entry: Entry;
};

export default function GalleryCard({ entry } : GalleryCardProps) {
    return (
        <div className="mx-auto bg-blue-300 w-full h-fit rounded-lg">
            {/* Card will have image at top then name below it */}
            <div className="relative h-30">
              <Image
                src={entry.image}
                alt={entry.name}
                fill
                loading="eager"
                className="object-contain"
              />
            </div>
            <h1 className="text-center text-lg">{entry.name}</h1>
            {/* <h1>{entry.name}: {entry.behavior}</h1> */}
            {/* <div className="font-bold text-red-300">Found in {entry.biomes.join(", ")}</div> */}
        </div>
    )
}