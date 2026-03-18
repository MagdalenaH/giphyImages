"use client"

import {useEffect, useState} from "react";

interface Props {
    queryInput: string,
    page: number
}

type GiphyImage = {
    images: {
        downsized_medium: {
            url: string;
        };
    };
};

export default function useLoadImages({queryInput, page}: Props) {
    const [images, setImages] = useState<string[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const numberOfResultsPerPage = 3;

    useEffect(() => {
        const params = new URLSearchParams({
            api_key: "1bkG7ky5cmw5SLyvNfElcR1iYVzs38Zq",
            q: queryInput,
            limit: numberOfResultsPerPage.toString(),
            rating: "g",
            offset: (page * numberOfResultsPerPage).toString(),
        });

        const fetchData = async () => {
            try {
                setLoading(true);
                const res = await fetch(`https://api.giphy.com/v1/gifs/search?${params}`);
                return await res.json();

            } catch (err) {
                console.error(err);
            }
        };

        fetchData().then(r => {
                if (r?.data) {
                    setImages(r.data.map((image: GiphyImage) => image.images.downsized_medium.url));
                }
            setLoading(false);
            }
        );
    }, [queryInput, page]);

    return {images, loading};
}