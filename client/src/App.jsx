import {Button} from "@/components/ui/button.jsx"
import Alert from "@/components/ui/alert.jsx"
import {useState} from "react";


export default function App() {
    const [isOpen, setIsOpen] = useState(false)

    const handleFunction = () => {
        console.log('Hello World')
    }
    const handleFunction2 = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className="h-screen bg-[#f5f7fa] w-screen ">
            <div className="max-w-[1200px] text-present-1 mx-auto shadow-sm rounded-5xl ">
                <div
                onClick={handleFunction2}
                >
                    <Button className={"absolute-center"}>Secondary Button</Button>
                </div>
                <Alert isOpen={isOpen} setIsOpen={setIsOpen} variant={"delete"} func={handleFunction}/>
            </div>
        </div>
    )
}