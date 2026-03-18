"use client";

import {useState} from "react";
import QuerySection from "@/app/query-section";
import {Position} from "@/app/types";

export default function Homepage() {
    const [queryInput, setQueryInput] = useState("");
    const [imageText, setImageText] = useState("");
    const [imageTextPosition, setImageTextPosition] = useState(Position.Top);

    return (
        <main className="m-8">
            <QuerySection
                queryInput={queryInput}
                setQueryInput={setQueryInput}
                imageText={imageText}
                setImageText={setImageText}
                setImageTextPosition={setImageTextPosition}
                imageTextPosition={imageTextPosition}
            />

        </main>
    )
}