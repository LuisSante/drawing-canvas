import { cn } from "@/lib/utils";
import { Star } from "lucide-react";

interface FooterProps {
    title: string;
    authorLabel: string;
    createdAtLabel: string;
    isFavorite: boolean;
    onClick: () => void;
    disabled: boolean;
}

export const Footer = ({
    title,
    authorLabel,
    createdAtLabel,
    isFavorite,
    onClick,
    disabled,
}: FooterProps) => {
    return (
        <div className="relative bg-white p-3">
            <p className="max-w-[calc(100%-20px)] text-[13px] truncate">
                {title}
            </p>
            <p className="opacity-0 group-hover:opacity-100 text-[11px] text-muted-foreground truncate transition-opacity">
                {authorLabel}, {createdAtLabel}
            </p>
            <button
                disabled={disabled}
                onClick={onClick}
                className={cn(
                    "opacity-0 group-hover:opacity-100 text-muted-foreground transition absolute top-3 right-3 hover:text-blue-600",
                    disabled && "cursor-not-allowed opacity-75"
                )}
            >
                <Star
                    className={cn(
                        "h-4 w-4",
                        isFavorite && "fill-blue-600 text-blue-600"
                    )}
                />
            </button>
        </div>
    );
};
