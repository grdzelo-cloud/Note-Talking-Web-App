import {Button} from "@/components/ui/button.jsx";


export default function App() {
    return (
        <div className="h-screen bg-[#f5f7fa] w-screen text-prenet grid-sidebar tracking text-base/[120%]">
            <div className="size-86 text-present-1 bg-white mx-auto shadow-sm rounded-5xl ">
                <p>The quick brown fox jumps over the lazy dog.</p>
                <Button variant={"border"} disabled>Primary Button</Button>
            </div>
        </div>
    );
}