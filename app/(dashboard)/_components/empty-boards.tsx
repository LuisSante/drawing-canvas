import { Button } from "@/components/ui/button";
import Image from "next/image";

export const EmptyBoards = () => {
    return (
        <div className="flex flex-col justify-center items-center h-full">
            <Image
                alt="Board"
                src="/board-icon.svg"
                width={140}
                height={140}
            />
            <h2 className="mt-6 font-semibold text-2xl">
                Create your first board!
            </h2>
            <p className="mt-2 text-muted-foreground text-sm">
                Start by creating a board for your organization
            </p>
            <div className="mt-6">
                <Button size="lg">
                    Create board
                </Button>
            </div>
        </div>
    );
}