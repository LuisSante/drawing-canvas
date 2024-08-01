"use client";

import { useSelf } from "@/liveblocks.config";
import { Info } from "./info";
import { Participants } from "./participants";
import { Toolbar } from "./toolbar";

interface CanvasProps {
    boardId: string;
};

export const Canvas = ({ boardId }: CanvasProps) => {
    const info = useSelf((me) => me.info);
    return (
        <main
            className="relative bg-neutral-100 w-full h-full touch-none"
        >
            <Info />
            <Participants />
            <Toolbar />
        </main>
    )
}