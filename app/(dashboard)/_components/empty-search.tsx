import Image from "next/image";

export const EmptySearch = () => {
    return (
        <div className="flex flex-col justify-center items-center h-full">
            <Image
                alt="Note"
                src="/note-icon.svg"
                width={140}
                height={140}
            />
            <h2 className="mt-6 font-semibold text-2xl">
                No results found!
            </h2>
            <p className="mt-2 text-muted-foreground text-sm">
                Try Searching for something else
            </p>
        </div>
    );
}