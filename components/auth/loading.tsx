import Image from "next/image";
import DrawingIcon from "../../public/drawing.svg"

const Loading = () => {
    return (
        <div className="flex flex-col justify-center items-center w-full h-full">
            <Image
                src="/drawing.svg"
                alt="drawing"
                width={120}
                height={120}
                className="animate-pulse-duration-700"
            />
        </div>
    )
}

export default Loading