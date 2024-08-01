"use client";

import { Info } from "./info";
import { Participants } from "./participants";
import { Toolbar } from "./toolbar";

interface CanvasProps {
    boardId: string;
};

export const Canvas = ({ boardId }: CanvasProps) => {
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