"use client";

import { Loader } from "lucide-react"
import { InfoSkeleton } from "./info"
import { ParticipantsSkeleton } from "./participants"
import { ToolbarSkeleton } from "./toolbar"

export const Loading = () => {
    return (
        <main
            className="relative flex justify-center items-center bg-neutral-100 w-full h-full touch-none"
        >
            <Loader className="w-6 h-6 text-muted-foreground animate-spin" />
            <InfoSkeleton />
            <ParticipantsSkeleton />
            <ToolbarSkeleton />
        </main>
    )
}
