// import { Button } from "@/components/ui/button.jsx";
// import useToast from "./store/toast";
// import ToastButton from "./components/toast-button";
// import { NoutsBar } from "./components/ui/nouts-bar";
// import IconArchive from "./components/svg/IconArchive";
// import { MenuBar } from "./components/ui/menu-bar";

import { MenuBar } from "./components/ui/menu-bar";
import Logo from "./components/ui/logo";
import { SidebarNavigation } from "./components/ui/sidebar-navigation";
import { NoutsBar } from "./components/ui/nouts-bar";
import ToastButton from "./components/toast-button";
import SettingsMenu from "./components/ui/settings-menu";


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
            {/* <SettingsMenu /> */}
            <SidebarNavigation />
            <MenuBar />
        </div>
    );
}