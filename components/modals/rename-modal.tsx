"use client";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogClose,
    DialogFooter,
    DialogTitle
} from "@/components/ui/dialog";

import { useRenameModal } from "@/store/use-rename-modal";
import { FormEventHandler, useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { api } from "@/convex/_generated/api";
import { toast } from "sonner";
import { UseApiMutation } from "@/hooks/use-api-mutation";

export const RenameModal = () => {

    const { isOpen, onClose, initialValues } = useRenameModal();
    const [title, setTitle] = useState(initialValues.title);
    const { mutate, pending } = UseApiMutation(api.board.update)

    useEffect(() => {
        setTitle(initialValues.title);

    }, [initialValues.title]);

    const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();

        mutate({
            id: initialValues.id,
            title,
        })
            .then(() => {
                toast.success("Board renamed")
                onClose();
            })
            .catch(() => toast.error("Failed to rename board"))

    };

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>
                        Edit board title
                    </DialogTitle>
                </DialogHeader>
                <DialogDescription>
                    Enter a new title for this this board
                </DialogDescription>
                <form onSubmit={onSubmit} className="space-y-4">
                    <Input
                        disabled={pending}
                        required
                        maxLength={60}
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Board Title"
                    />
                    <DialogFooter>
                        <DialogClose asChild>
                            <Button>
                                Cancel
                            </Button>
                        </DialogClose>
                        <Button disabled={pending} type="submit">
                            Save
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
};