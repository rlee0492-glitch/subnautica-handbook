import { GalleryCard } from "@/components";

type Entry = { name: string; behavior: string; biomes: string[]; image: string };

type GalleryContainerProps = {
  title: string;
  entries: Entry[];
};

export default function GalleryContainer({ title, entries }: GalleryContainerProps) {
    return (
        <div>
            <h1 className="font-bold text-center">{title}</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {
                entries.map((entry: Entry, i: Number) => (
                    <GalleryCard key={i.toString()} entry={entry} />
                ))
            }
            </div>
        </div>
    )
}