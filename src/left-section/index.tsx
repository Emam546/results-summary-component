import Counter from "../counter";
import { DataType } from "../data";
import "./style.css";
export default function LeftSection({ data }: { data: DataType }) {
    return (
        <div
            className="bg-gradient-to-b bg-primary 
        text-white w-full
        text-center py-10 px-2 sm:px-12 md:w-[20rem] max-w-full rounded-b-3xl
        md:rounded-3xl overflow-hidden"
        >
            <span className="block text-xl font-extrabold tracking-normal text-lavender-light">
                Your Result
            </span>
            <div
                className="
                    circle-gradient
                    m-auto
                    my-5
                    flex flex-col 
                    text-center justify-center
                    w-[11rem] h-[11rem] rounded-[50%] 
                    font-bold
                "
            >
                <span className="text-7xl ">
                    <Counter>
                        {Math.ceil(data.reduce((val, nextval) => {
                            return val + nextval.score;
                        }, 0) / data.length)}
                    </Counter>
                </span>
                <span className="text-lavender-light">of 100</span>
            </div>
            <div className="animation-great">
                <h2 className="mb-3 text-2xl font-extrabold tracking-normal">
                    Great
                </h2>
                <p className="text-base leading-5 shadow text-lavender-light">
                    You scored higher than 65% of the people who have taken these
                    tests
                </p>
            </div>
        </div>
    );
}
