type Entry = { name: string; behavior: string; biomes: string[] };

type GalleryCardProps = {
  entry: Entry;
};

export default function GalleryCard({ entry } : GalleryCardProps) {
    return (
        <div className="bg-blue-200">
            <h1>{entry.name}: {entry.behavior}</h1>
            <div className="font-bold text-red-300">Found in {entry.biomes.join(", ")}</div>
          </div>
    )
}