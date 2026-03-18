"use client";

import {useState} from "react";
import QuerySection from "@/app/query-section";
import {Position} from "@/app/types";
import useLoadImages from "@/app/image-loader";
import {FaAngleRight, FaAngleLeft} from "react-icons/fa6";

export default function Homepage() {
    const [queryInput, setQueryInput] = useState("");
    const [imageText, setImageText] = useState("");
    const [imageTextPosition, setImageTextPosition] = useState(Position.Top);
    const [page, setPage] = useState(0);
    const {images, loading} = useLoadImages({queryInput, page});

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

    function searchForInput(input: string): void {
        setQueryInput(input);
        setPage(0);
    }

    const otherStyling = " bg-black/50 absolute right-1/2 px-2"
    const paginationButtonStyle = "cursor-pointer disabled:cursor-not-allowed disabled:opacity-20 p-2 rounded-lg opacity-70 hover:opacity-100 bg-teal-400/30 hover:bg-teal-400/70 active:bg-teal-400/50"

    return (
        <main className="m-8">
            <QuerySection
                queryInput={queryInput}
                setQueryInput={searchForInput}
                imageText={imageText}
                setImageText={setImageText}
                setImageTextPosition={setImageTextPosition}
                imageTextPosition={imageTextPosition}
            />

            {
                queryInput === "" ? (
                    <div className={"mt-2 text-gray-500"}>Input a query to start searching</div>
                ): <ul className="flex flex-col md:flex-row mt-4 w-full h-full gap-4">
                    {images.map((image, index) => (
                        <li key={index} className="relative h-full">
                            <img src={image}
                                className={loading ? "opacity-40" : "opacity-100"}
                            />
                            {imageText === "" ?
                                <div></div>
                                : <div className={positionClass()}>
                                    {imageText}
                                </div>
                            }
                        </li>
                    ))
                    }
                </ul>

            }



            {images.length == 0 ?
                null
                : <section className="flex flex-row mt-4 w-full justify-center gap-1">
                    <button onClick={()=> setPage(page - 1)}
                            disabled={page == 0}
                            className={paginationButtonStyle}
                    >
                        <FaAngleLeft />
                    </button>
                    <button onClick={()=> setPage(page + 1)}
                            className={paginationButtonStyle}
                    >
                        <FaAngleRight />
                    </button>

                </section>


            }


        </main>
    )
}