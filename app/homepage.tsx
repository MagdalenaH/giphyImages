"use client";

import {useState} from "react";
import QuerySection from "@/app/query-section";
import {Position} from "@/app/types";
import useLoadImages from "@/app/image-loader";

export default function Homepage() {
    const [queryInput, setQueryInput] = useState("");
    const [imageText, setImageText] = useState("");
    const [imageTextPosition, setImageTextPosition] = useState(Position.Top);
    const images = useLoadImages({queryInput});

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

            <ul className="flex flex-col md:flex-row mt-4 w-full">
                {images &&
                    images.images.map((image, index) => (
                        <li key={index}>
                            <img src={image}  />
                        </li>
                    ))
                }
            </ul>

        </main>
    )
}