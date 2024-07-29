"use client";

import { UserButton } from "@clerk/nextjs";

export const Navbar = () => {
    return (
        <div className="flex gap-x-4 bg-green-500 item-center p-5">
            <div className="lg:flex lg:flex-1 hidden bg-white">
                Search
            </div>
            <UserButton />
        </div>
    );
}