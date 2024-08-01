import { Hint } from "@/components/hint";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface UserAvatarProps {
    src?: string;
    name?: string;
    fallback?: string;
    borderColor?: string;
}

export const UserAvatar = ({
    src,
    name,
    fallback,
    borderColor
}: UserAvatarProps) => {
    return (
        <Hint
            label={name || "Temmeate"}
            side="bottom"
            sideOffset={18}
        >
            <Avatar
                className="border-2 w-8 h-8"
                style={{ borderColor }}
            >
                <AvatarImage src={src} />
                <AvatarFallback className="font-semibold text-xs">
                    {fallback}
                </AvatarFallback>
            </Avatar>
        </Hint>
    )
}
