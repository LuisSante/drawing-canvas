"use client";

import { connectionIdToColor } from "@/lib/utils";
import { useOther } from "@/liveblocks.config";
import { MousePointer2 } from "lucide-react";
import { memo } from "react";

interface CursorProps {
    connectionId: number;
}

export const Cursor = memo(({
    connectionId
}: CursorProps) => {

    const info = useOther(connectionId, (user) => user?.info)
    const cursor = useOther(connectionId, (user) => user.presence.cursor)

    const name = info?.name || "Teammeate";

    if (!cursor) {
        return null;
    }

    const { x, y } = cursor;
    return (
        <foreignObject
            style={{
                transform: `translateX(${x}px) translateY(${y}px)`
            }}
            height={50}
            width={name.length * 10 + 24}
            className="relative drop-shadow-md"
        >
            <MousePointer2
                className="w-5 h-5"
                style={{
                    fill: connectionIdToColor(connectionId),
                    color: connectionIdToColor(connectionId),
                }}
            />
            <div
                className="left-5 absolute px-1.5 py-0.5 rounded-md font-semibold text-white text-xs"
                style={{
                    backgroundColor: connectionIdToColor(connectionId),
                }}
            >
                {name}
            </div>
        </foreignObject>
    );
});

Cursor.displayName = "Cursor";
