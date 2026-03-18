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

    function positionClass(): string {
        switch (imageTextPosition) {
            case Position.Top:
                return ("top-[5px]" + otherStyling);

            case Position.Bottom:
                return ("bottom-[5px]" + otherStyling);

            case Position.Below:
                return otherStyling;

            default:
                return otherStyling;
        }
    }

    const otherStyling = " bg-black/50 absolute right-1/2"

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
                {images.images.map((image, index) => (
                        <li key={index} className="relative h-full">
                            <img src={image}  />
                            {imageText === "" ?
                                <div></div>
                                : <div className={positionClass()}

                                >
                                    {imageText}
                                </div>
                            }
                        </li>
                    ))
                }
            </ul>

        </main>
    )
}