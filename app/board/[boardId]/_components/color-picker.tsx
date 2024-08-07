"use client";

import { colorToCss } from "@/lib/utils";
import { color } from "@/types/canvas";

interface ColorPickerProps {
    onChange: (color: color) => void;
};

interface ColorButtonProps {
    onClick: (color: color) => void;
    color: color;
};

const ColorButton = ({
    onClick,
    color
}: ColorButtonProps) => {
    return (
        <button
            className="flex justify-center items-center hover:opacity-75 w-8 h-8 transition"
            onClick={() => onClick(color)}
        >
            <div
                className="border-neutral-300 border rounded-md w-8 h-8"
                style={{
                    background: colorToCss(color)
                }}
            >
            </div>
        </button>

    );
};

export const ColorPicker = ({
    onChange
}: ColorPickerProps) => {
    return (
        <div className="flex flex-wrap items-center gap-2 border-neutral-200 mr-2 pr-2 border-r max-w-[164px]">
            <ColorButton
                color={{ r: 243, g: 82, b: 35 }}
                onClick={onChange}
            />
            <ColorButton
                color={{ r: 255, g: 249, b: 177 }}
                onClick={onChange}
            />
            <ColorButton
                color={{ r: 68, g: 202, b: 99 }}
                onClick={onChange}
            />
            <ColorButton
                color={{ r: 39, g: 142, b: 237 }}
                onClick={onChange}
            />
            <ColorButton
                color={{ r: 155, g: 105, b: 245 }}
                onClick={onChange}
            />
            <ColorButton
                color={{ r: 252, g: 142, b: 42 }}
                onClick={onChange}
            />
            <ColorButton
                color={{ r: 0, g: 0, b: 0 }}
                onClick={onChange}
            />
            <ColorButton
                color={{ r: 255, g: 255, b: 255 }}
                onClick={onChange}
            />
        </div>
    );
};
