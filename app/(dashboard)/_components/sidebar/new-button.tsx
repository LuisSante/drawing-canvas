"use client";
import { Plus } from "lucide-react"
import {
    Dialog,
    DialogContent,
    DialogTrigger
} from "@/components/ui/dialog";
import { CreateOrganization } from "@clerk/nextjs";
import { Hint } from "@/components/hint";

export const NewButton = () => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <div className="aspect-square">
                    <Hint
                        label="Create Organization"
                        side="right"
                        align="start"
                        sideOffset={18}
                    >
                        <button className="flex justify-center items-center bg-white/25 opacity-60 hover:opacity-100 rounded-md w-full h-full transition">
                            <Plus className="text-white" />
                        </button>
                    </Hint>
                </div>
            </DialogTrigger>
            <DialogContent className="bg-white p-0 border-none max-w-[480px]">
                <CreateOrganization skipInvitationScreen={true} />
            </DialogContent>
        </Dialog>
    );
}