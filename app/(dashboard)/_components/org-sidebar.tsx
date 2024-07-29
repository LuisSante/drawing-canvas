"use client";

import Link from "next/link";
import Image from "next/image";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { OrganizationSwitcher } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { LayoutDashboard, Star } from "lucide-react";
import { useSearchParams } from "next/navigation";

const font = Poppins({
    subsets: ["latin"],
    weight: "600",
})

export const OrgSidebar = () => {

    const searhParams = useSearchParams();
    const favorites = searhParams.get("favorites");

    return (
        <div className="lg:flex flex-col space-y-6 hidden bg-white pt-5 pl-5 w-[206px]">
            <Link href="/">
                <div className="flex items-center gap-x-2">
                    <Image
                        src="/drawing.svg"
                        alt="Drawing"
                        height={60}
                        width={60}
                    />
                    <span className={cn(
                        "font-semibold text-2xl",
                        font.className,
                    )}>
                        Board
                    </span>
                </div>
            </Link>
            <OrganizationSwitcher
                hidePersonal
                appearance={{
                    elements: {
                        rootBox: {
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            width: "100%",
                        },
                        organizationSwitcherTrigger: {
                            padding: "6px",
                            width: "100%",
                            borderRadius: "8px",
                            border: "1px solid #E5E7EB",
                            justifyContent: "space-between",
                            backgroundColor: "white",
                        }
                    }
                }}
            />
            <div className="space-y-1 w-full">
                <Button
                    variant={favorites ? "outline" : "secondary"}
                    asChild
                    size="lg"
                    className="justify-start px-2 w-full font-normal"
                >
                    <Link href="/">
                        <LayoutDashboard className="mr-2 w-4 h-4" />
                        Team Boards
                    </Link>
                </Button>
                <Button
                    variant={favorites ? "secondary" : "outline"}
                    asChild
                    size="lg"
                    className="justify-start px-2 w-full font-normal"
                >
                    <Link href={{
                        pathname: "/",
                        query: { favorites: true }
                    }}>
                        <Star className="mr-2 w-4 h-4" />
                        Favorite Boards
                    </Link>
                </Button>
            </div>
        </div>
    );
}