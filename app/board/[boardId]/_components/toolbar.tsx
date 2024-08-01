export const Toolbar = () => {
    return (

        <div
            className="top-[50%] left-2 absolute flex flex-col gap-y-4 -translate-y-[50%]"
        >
            <div
                className="flex flex-col items-center gap-y-1 bg-white shadow-md p-1.5 rounded-md"
            >
                <div>
                    Pencil
                </div>
                <div>
                    Square
                </div>
                <div>
                    Circle
                </div>
                <div>
                    Ellipsis
                </div>
            </div>
            <div
                className="flex flex-col items-center bg-white shadow-md p-1.5 rounded-md"
            >
                <div>
                    Undo
                </div>
                <div>
                    Redo
                </div>
            </div>
        </div>
    )
}

Toolbar.Skeleton = function ToolbarSkeleton() {
    return (
        <div className="top-[50%] left-2 absolute flex flex-col gap-y-4 bg-white shadow-md w-[52px] h-[360px] -translate-y-[50%]" />
    );
};
