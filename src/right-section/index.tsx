import Counter from "../counter";
import { DataType } from "../data";
import "./style.css";
function Box({ category, icon, score, i }: DataType[0] & { i: number }) {
    return (
        <div
            className={`flex rounded-md mb-2 w-100
    bg-box-color-${(i + 1) % 5} justify-between 
    items-center 
    p-4`}
        >
            <div className="flex gap-2">
                <img
                    src={icon}
                    alt={`${category}-icon`}
                />
                <span className={`text-box-color-${(i + 1) % 5} font-bold`}>
                    {category}
                </span>
            </div>
            <div className="font-bold">
                <Counter>{score}</Counter><span className="text-black/30">/100</span>
            </div>
        </div>
    );
}
export default function RightSection({ data }: { data: DataType }) {
    return (
        <div
            className="rightSection py-10 px-4 sm:px-9 
        md:w-[20rem] max-w-full flex-grow
        flex flex-col
        "
        >
            <h3 className="mb-4 text-xl font-extrabold text-blue-dark-gray">
                Summary
            </h3>
            {data.map((data, i) => {
                return (
                    <Box
                        {...data}
                        i={i}
                        key={i}
                    />
                );
            })}
            <div className="flex flex-1 md:block">
                <input
                    className="self-end block w-full px-3 py-3 text-base text-center text-white cursor-pointer mt-7 rounded-3xl bg-blue-dark-gray hover:bg-gradient-to-b bg-primary "
                    value="Continue"
                />
            </div>
        </div>
    );
}
