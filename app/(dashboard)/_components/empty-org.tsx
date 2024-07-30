import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { WelcomeEmpty } from "./welcome-empty";
import { Button } from "@/components/ui/button";
import { CreateOrganization } from "@clerk/nextjs";

export const EmptyOrg = () => {
    return (
        <div className="flex flex-col justify-center items-center h-full">
            <WelcomeEmpty />
            <h2 className="mt-6 font-semibold text-2xl">
                Welcome to Board
            </h2>
            <p className="mt-2 text-muted-foreground text-sm">
                Create an organization to get started
            </p>
            <div className="mt-6">
                <Dialog>
                    <DialogTrigger asChild>
                        <Button size='lg'>
                            Create Organization
                        </Button>
                    </DialogTrigger>
                    <DialogContent className="bg-transparent p-0 border-none max-w-[480px]">
                        <CreateOrganization />
                    </DialogContent>
                </Dialog>
            </div>
        </div>
    );
}