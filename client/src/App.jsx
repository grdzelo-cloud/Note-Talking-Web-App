import { Button } from "@/components/ui/button.jsx";
import useToast from "./store/toast";
import ToastButton from "./components/toast-button";


export default function App() {
    const { popup,setVariant } = useToast()
    const handleClick = () => {
        popup()
        setVariant("note-archived")
    }
    return (
        <div
            className=" bg-neutral-0 h-screen ">
            <div

            >
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi consequuntur officiis pariatur iusto consequatur, voluptatibus tempora, tenetur placeat eum ipsa perspiciatis adipisci maiores quasi eveniet minus culpa, qui quaerat vel!</p>
                <div
                    className="relative z-99"
                    onClick={() => handleClick()}
                >
                    <Button
                    >Click Toast</Button>
                </div>
            </div>
        </div>
    );
}