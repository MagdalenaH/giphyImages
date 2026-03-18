"use client"

import {useEffect, useState} from "react";

interface Props {
    queryInput: string,
}

export default function useLoadImages({queryInput}: Props) {
    const [images, setImages] = useState<string[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(
                    "https://api.giphy.com/v1/gifs/search?limit=3&rating=g&api_key=1bkG7ky5cmw5SLyvNfElcR1iYVzs38Zq&q=" +
                    queryInput

                );
                const data = await res.json();
                if(data.data) {
                    setImages(data.data.map((image) => image.images.downsized_medium.url))
                }

            } catch (err) {
                console.error(err);
            }
        };

        fetchData();
    }, [queryInput]);

    return {images};
}