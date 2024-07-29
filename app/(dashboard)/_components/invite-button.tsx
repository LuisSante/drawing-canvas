import { Plus } from "lucide-react";
import { OrganizationProfile } from "@clerk/nextjs";
import {
    Dialog,
    DialogContent,
    DialogTrigger
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export const InviteButton = ({ }) => {

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline">
                    <Plus className="mr-2 w-4 h-4" />
                    Invite members
                </Button>
            </DialogTrigger>
            <DialogContent className="bg-transparent p-0 border-none max-w-[880px]">
                <OrganizationProfile />
            </DialogContent>
        </Dialog>
    );
}