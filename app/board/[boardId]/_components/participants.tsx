export const Participants = () => {
    return (
        <div
            className="top-2 right-2 absolute flex items-center bg-white shadow-md p-3 rounded-md h-12"
        >
            participants
        </div>
    )
}

Participants.Skeleton = function ParticipantsSkeleton() {
    return (
        <div className="top-2 right-2 absolute flex items-center bg-white shadow-md p-3 rounded-md w-[100px] h-12" />
    );
};