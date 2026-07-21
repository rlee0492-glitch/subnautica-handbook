import fs from "fs";
import path from "path";
import Image from "next/image";
import { GalleryContainer } from "@/components";

type Entry = { name: string; behavior: string; biomes: string[]; image: string };

export default function Home() {
    const filePath = path.join(process.cwd(), "content", "/extinct.json");
    const jsonData = fs.readFileSync(filePath, "utf-8");
    const entries: Entry[] = JSON.parse(jsonData).Fauna;

    return (
        <div className="relative w-full h-full flex flex-col justify-center item-center py-12">
            <div className="fixed inset-0 -z-10">
                <Image
                    src="/background.jpg"
                    alt="Background"
                    fill
                    loading="eager"
                    className="object-cover"
                />
            </div>
            <GalleryContainer title="Extinct" entries={entries} />
        </div>
    )
}