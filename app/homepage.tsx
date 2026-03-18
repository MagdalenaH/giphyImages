"use client";

import {useState} from "react";

export default function Homepage() {
    const [queryInput, setQueryInput] = useState("");
    const [imageText, setImageText] = useState("");
    const [imageTextPosition, setImageTextPosition] = useState("top");

    type Position = "top" | "bottom" | "below";
    const positionOptions: Position[] = [ "top",  "bottom", "below"];

    return (
        <main className="m-8">
            <section className="flex flex-row gap-2">
                <div>
                    <h2>Query</h2>
                    <input
                        value={queryInput}
                        onChange={(e) => setQueryInput(e.target.value)}
                        placeholder="Enter query"
                        className="border border-gray-500  px-2 py-1 mt-0.5 rounded-md"
                        title="Query"
                    />
                </div>
                <div>
                    <h2>Image text</h2>
                    <input
                        value={imageText}
                        onChange={(e) => setImageText(e.target.value)}
                        placeholder="Enter image text"
                        className="border border-gray-500 px-2 py-1 mt-0.5 rounded-md"
                        title="Image text"
                    />
                </div>
                <div>
                    <h2>Image text positioning</h2>
                    <select
                        value={imageTextPosition}
                        onChange={(e) => setImageTextPosition(e.target.value)}
                        className="border border-gray-500 px-2 py-1 mt-0.5 rounded-md w-50"
                        title="Image text position"

                    >
                        {positionOptions.map((positionOption) => (
                            <option
                                value={positionOption}
                                key={positionOption}
                                className="bg-black"
                            >
                                {positionOption}
                            </option>
                        ))}
                    </select>
                </div>
            </section>

        </main>
    )
}