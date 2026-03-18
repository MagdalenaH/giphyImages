"use client";

import {Position} from "@/app/types";

interface QuerySectionParams {
    queryInput: string;
    setQueryInput: (queryInput: string) => void;
    imageText: string;
    setImageText: (imageText: string) => void;
    imageTextPosition: Position,
    setImageTextPosition: (imageTextPosition: Position) => void;
}

export default function QuerySection({queryInput, setQueryInput, imageText, setImageText, imageTextPosition, setImageTextPosition}: QuerySectionParams) {
    const positionOptions: Position[] = [ Position.Top, Position.Bottom, Position.Below ];

    function stringToPosition(text: string): void {
        switch (text.toLowerCase()) {
            case "top":
                setImageTextPosition(Position.Top);
                break;

            case "bottom":
                setImageTextPosition(Position.Bottom);
                break;

            case "below":
                setImageTextPosition(Position.Below);
                break;

            default:
                break;
        }

    }

    return (
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
                    onChange={(e) => stringToPosition(e.target.value)}
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

    )
}