"use client";

import { api } from "@/convex/_generated/api";
import { UseApiMutation } from "@/hooks/use-api-mutation";
import { cn } from "@/lib/utils";
import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

interface NewBoardButtonProps {
    orgId: string;
    disabled?: boolean;
}

export const NewBoardButton = ({
    orgId,
    disabled
}: NewBoardButtonProps) => {
    const router = useRouter();
    const { mutate, pending } = UseApiMutation(api.board.create);

    const onClick = () => {
        mutate({
            orgId,
            title: "Untitled",
        })
            .then((id) => {
                toast.success("Board created")
                router.push(`/board/${id}`)
            })
            .catch(() => toast.error("Failed to create board"))
    }

    return (
        <button
            disabled={pending || disabled}
            onClick={onClick}
            className={cn(
                "col-span-1 aspect-[100/127] bg-blue-600 rounded-lg hover:bg-blue-800 flex flex-col items-center justify-center py-6",
                (pending || disabled) && "opacity-75 hover:bg-blue-600 cursor-not-allowed"
            )}
        >
            <div />
            <Plus className="w-12 h-12 text-white stroke-1" />
            <p className="font-light text-sm text-white">
                New Board
            </p>
        </button>
    )
}

