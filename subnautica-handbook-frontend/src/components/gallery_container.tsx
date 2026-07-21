import { GalleryCard } from "@/components";

type Entry = { name: string; behavior: string; biomes: string[]; image: string };

type GalleryContainerProps = {
  title: string;
  entries: Entry[];
};

export default function GalleryContainer({ title, entries }: GalleryContainerProps) {
    return (
        <div className="max-w-6xl mx-auto py-8 bg-black/70 w-full h-fit rounded-lg">
            <h1 className="font-bold text-center text-8xl">{title}</h1>
            <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {
                entries.map((entry: Entry, i: Number) => (
                    <GalleryCard key={i.toString()} entry={entry} />
                ))
            }
            </div>
        </div>
    )
}