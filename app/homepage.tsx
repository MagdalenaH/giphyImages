"use client";

import {useEffect, useState} from "react";
import QuerySection from "@/app/query-section";
import {Position} from "@/app/types";

export default function Homepage() {
    const [queryInput, setQueryInput] = useState("");
    const [imageText, setImageText] = useState("");
    const [imageTextPosition, setImageTextPosition] = useState(Position.Top);
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(
                    "https://api.giphy.com/v1/gifs/search?limit=3&rating=g&api_key=1bkG7ky5cmw5SLyvNfElcR1iYVzs38Zq&q=" +
                    queryInput

                );
                const data = await res.json();
                console.log("giphies fetched", data);
                if(data.data) {
                    setImages(data.data.map((image) => image.images.downsized_medium.url))
                }

            } catch (err) {
                console.error(err);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, [queryInput]);

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

            <div className="flex flex-row">
                {images.map((image, index) => (
                    <img src={image} key={index} />
                ))}


            </div>

        </main>
    )
}