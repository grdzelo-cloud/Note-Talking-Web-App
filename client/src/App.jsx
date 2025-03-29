import {Button} from "@/components/ui/button.jsx";
import Modal from "@/components/ui/modal.jsx";


export default function App() {
    return (
        <div className="h-screen bg-[#f5f7fa] w-screen grid-sidebar">
            <div className="size-86 text-present-1 bg-white mx-auto shadow-sm rounded-5xl ">
                <p className="text-present-4">The quick brown fox jumps over the lazy dog.</p>
                <Button variant={"border"}>Secondary Button</Button>
                <Modal/>
            </div>
        </div>
    );
}