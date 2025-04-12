import {MenuBar} from "./components/ui/menu-bar";
import {SidebarNavigation} from "./components/ui/sidebar-navigation";
import Input from "@/components/ui/input.jsx";


export default function App() {
    // const { popup,setVariant } = useToast()
    // const handleClick = () => {
    //     popup()
    //     setVariant("note-archived")
    // }
    return (
        <div className=" bg-neutral-0 h-screen flex flex-col">
            {/* <MenuBar /> */}
            {/* <NoutsBar /> */}
            {/*/!* <SettingsMenu /> *!/*/}
            {/*<SidebarNavigation />*/}
            {/*<MenuBar />*/}
            {/*navbar */}
            <Input variant={"forgot-password"} disabled placeholder="Search..."/>
        </div>
    );
}