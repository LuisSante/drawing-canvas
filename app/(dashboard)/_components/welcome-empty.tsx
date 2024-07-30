import Image from "next/image";

export const WelcomeEmpty = () => {
    return (
        <div className="flex flex-col justify-center items-center gap-y-4 mt-[-70px]">
            <Image
                alt=""
                src="/pen-icon.svg"
                width={50}
                height={50}
            />
            <div className="flex justify-center items-center gap-x-4">
                <Image
                    alt=""
                    src="/arrow-icon.svg"
                    width={50}
                    height={50}
                />
                <Image
                    alt=""
                    src="/canva-icon.svg"
                    width={50}
                    height={50}
                />
            </div>
        </div>
    )
}
