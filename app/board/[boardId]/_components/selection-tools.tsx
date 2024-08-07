"use client";

import { useSelectionBounds } from "@/hooks/use-selection-bounds";
import { useMutation, useSelf } from "@/liveblocks.config";
import { Camera, color } from "@/types/canvas";
import { memo } from "react";
import { ColorPicker } from "./color-picker";

interface SelectionToolsProps {
    camera: Camera,
    setLastUsedColor: (color: color) => void
};

export const SelectionTools = memo(({
    camera,
    setLastUsedColor
}: SelectionToolsProps) => {

    const selection = useSelf((me) => me.presence.selection);
    const setFill = useMutation((
        { storage },
        fill: color,
    ) => {
        const liveLayers = storage.get("layers");
        setLastUsedColor(fill);

        selection.forEach((id) => {
            liveLayers.get(id)?.set("fill", fill);
        });
    }, [selection, setLastUsedColor]);

    const selectionBounds = useSelectionBounds();

    if (!selectionBounds) {
        return null;
    }

    const x = selectionBounds.width / 2 + selectionBounds.x + camera.x;
    const y = selectionBounds.y + camera.y;

    return (
        <div
            className="absolute flex bg-white shadow-sm p-3 border rounded-xl select-none"
            style={{
                transform: `translate(
                    calc(${x}px - 50%), 
                    calc(${y - 16}px - 100%)
                )`
            }}
        >
            <ColorPicker
                onChange={setFill}
            />
        </div>
    );
});

SelectionTools.displayName = "SelectionTools";