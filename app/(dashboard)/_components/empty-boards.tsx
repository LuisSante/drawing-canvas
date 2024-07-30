"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { api } from "@/convex/_generated/api";
import { useOrganization } from "@clerk/nextjs";
import { UseApiMutation } from "@/hooks/use-api-mutation";
import { toast } from "sonner";

export const EmptyBoards = () => {

    const { organization } = useOrganization();
    const { mutate, pending } = UseApiMutation(api.board.create);

    const onClick = () => {
        if (!organization) return;

        mutate({
            orgId: organization.id,
            title: "Untitled",
        })
            .then((id) => {
                toast.success("Board created")
            })
            .catch(() => toast.error("Failed to create board"));
    }

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
                <Button disabled={pending} onClick={onClick} size="lg">
                    Create board
                </Button>
            </div>
        </div>
    );
}