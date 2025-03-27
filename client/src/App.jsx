import {iconClock} from "./assets/images/index.js";
import Button from "./compnents/ui/button.jsx";

export default function App() {
    return (
        <div className="h-screen bg-[#f5f7fa] w-screen text-prenet grid-sidebar tracking text-base/[120%]">
            <div className="size-86 text-presnet-1 bg-white mx-auto shadow-sm rounded-5xl ">
                <img src={iconClock} alt="icon clocl"/>
                <p>The quick brown fox jumps over the lazy dog.</p>
                <Button variant={"border"}>Primary Button</Button>
            </div>
        </div>
    );
}