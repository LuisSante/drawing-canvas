"use client";

import { useOthers, useSelf } from "@/liveblocks.config";
import { UserAvatar } from "./user-avatar";
import { connectionIdToColor } from "@/lib/utils";

const MAX_SHOWN_USER = 2;

export const Participants = () => {

    const users = useOthers();
    const currentUser = useSelf();
    const hasMoreUsers = users.length > MAX_SHOWN_USER;

    return (
        <div
            className="top-2 right-2 absolute flex items-center bg-white shadow-md p-3 rounded-md h-12"
        >
            <div className="flex gap-x-2">
                {users.slice(0, MAX_SHOWN_USER).map(({
                    connectionId, info
                }) => {
                    return (
                        <UserAvatar
                            borderColor={connectionIdToColor(connectionId)}
                            key={connectionId}
                            src={info?.picture}
                            name={info?.name}
                            fallback={info?.name?.[0] || "T"}
                        />
                    )
                })}

                {currentUser && (
                    <UserAvatar
                        borderColor={connectionIdToColor(currentUser.connectionId)}
                        src={currentUser.info?.picture}
                        name={`${currentUser.info?.name} (You)`}
                        fallback={currentUser.info?.name?.[0]}
                    />
                )}

                {hasMoreUsers && (
                    <UserAvatar
                        src={`${users.length - MAX_SHOWN_USER} more`}
                        fallback={`+${users.length - MAX_SHOWN_USER}`}
                    />
                )}
            </div>
        </div>
    )
}

export const ParticipantsSkeleton = () => {
    return (
        <div className="top-2 right-2 absolute flex items-center bg-white shadow-md p-3 rounded-md w-[100px] h-12" />
    );
};