"use client";

import qs from "query-string"
import { Search } from "lucide-react";
import { useDebounceCallback } from "usehooks-ts"
import { useRouter } from "next/navigation";
import {
    ChangeEvent,
    useEffect,
    useState
} from "react"
import { Input } from "@/components/ui/input";

export const SearchInput = ({ }) => {

    const router = useRouter();
    const [value, setValue] = useState("");
    const debouncedValue = useDebounceCallback(setValue, 500);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        debouncedValue(e.target.value);
    }

    useEffect(() => {
        const url = qs.stringifyUrl({
            url: "/",
            query: {
                search: value,
            },
        }, { skipEmptyString: true, skipNull: true })

        router.push(url);
    }, [value, router])

    return (
        <div className="relative w-full">
            <Search
                className="top-1/2 left-3 absolute w-4 h-4 text-muted-foreground transform -translate-y-1/2"
            />
            <Input
                className="pl-9 w-full max-w-[516px]"
                placeholder="Search Boards"
                onChange={handleChange}
            // value={value}
            />
        </div>
    );
}