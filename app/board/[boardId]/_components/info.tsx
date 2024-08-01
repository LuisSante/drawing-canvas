"use client";

import { Actions } from "@/components/actions";
import { Hint } from "@/components/hint";
import { Button } from "@/components/ui/button";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { cn } from "@/lib/utils";
import { useRenameModal } from "@/store/use-rename-modal";
import { useQuery } from "convex/react";
import { Menu } from "lucide-react";
import { Poppins } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

interface InfoProps {
    boardId: string;
}

const font = Poppins({
    subsets: ["latin"],
    weight: "600",
})

export const TabSeparator = () => {
    return (
        <div className="px-1.5 text-neutral-300">
            |
        </div>
    );
};

export const Info = ({ boardId }: InfoProps) => {

    const { onOpen } = useRenameModal();

    const data = useQuery(api.board.get, {
        id: boardId as Id<"boards">,
    })

    if (!data) {
        return <InfoSkeleton />;
    }

    return (
        <div className="top-2 left-2 absolute flex items-center bg-white shadow-md px-1.5 rounded-md h-16">
            <Hint
                label="Go to boards"
                side="bottom"
                sideOffset={10}
            >
                <Button asChild variant="board" className="px-2 h-14">
                    <Link
                        href="/"
                    >
                        <Image
                            src="/drawing.svg"
                            alt="Board logo"
                            height={60}
                            width={60}
                        />
                        <span
                            className={cn(
                                "font-semibold text-xl ml-2 text-black",
                                font.className,
                            )}
                        >
                            Board
                        </span>
                    </Link>
                </Button>
            </Hint>
            <TabSeparator />
            <Hint
                label="Edit title"
                side="bottom"
                sideOffset={10}
            >
                <Button
                    variant="board"
                    className="px-2 font-normal text-base"
                    onClick={() => onOpen(data?._id, data.title)}
                >
                    {data.title}
                </Button>
            </Hint>
            <TabSeparator />
            <Actions
                id={data._id}
                title={data.title}
                side="bottom"
                sideOffset={10}
            >
                <div>
                    <Hint
                        label="Main Menu"
                        side="bottom"
                        sideOffset={10}
                    >
                        <Button
                            size="icon"
                            variant="board"
                        >
                            <Menu />
                        </Button>
                    </Hint>
                </div>
            </Actions>
        </div>
    )
}

export const InfoSkeleton = () => {
    return (
        <div className="top-2 left-2 absolute flex items-center bg-white shadow-md px-1.5 rounded-md w-[300px] h-12" />
    );
};