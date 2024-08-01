import { Loader } from "lucide-react"
import { Info } from "./info"
import { Participants } from "./participants"
import { Toolbar } from "./toolbar"

export const Loading = () => {
    return (
        <main
            className="relative flex justify-center items-center bg-neutral-100 w-full h-full touch-none"
        >
            <Loader className="w-6 h-6 text-muted-foreground animate-spin" />
            <Info.Skeleton />
            <Participants.Skeleton />
            <Toolbar.Skeleton />
        </main>
    )
}
