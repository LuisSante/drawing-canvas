"use client";

import { ClientSideSuspense } from "@liveblocks/react";
import { RoomProvider } from "@/liveblocks.config";
import React from "react";

interface RoomProps {
    children: React.ReactNode;
    roomId: string;
    fallback: NonNullable<React.ReactNode> | null;
}

export const Room = ({ children, roomId, fallback }: RoomProps) => {

    return (
        <RoomProvider id={roomId} initialPresence={{}}>
            <ClientSideSuspense fallback={fallback}>
                {() => children}
            </ClientSideSuspense>
        </RoomProvider>
    );
};