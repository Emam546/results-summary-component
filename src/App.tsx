import "./App.css";
import { data } from "./data";
import LeftSection from "./left-section";
import RightSection from "./right-section";

function App() {
    
    return (
        <>
            <main
                className="flex flex-col self-stretch w-full main-section md:self-center md:flex-row md:w-auto rounded-3xl"
            >
                <LeftSection data={data}/>
                <RightSection data={data}/>
            </main>
        </>
    );
}

export default App;
