import IconFont from "../svg/IconFont";
import IconLock from "../svg/IconLock";
import IconLogout from "../svg/IconLogout";
import IconSun from "../svg/IconSun";
import Logo from "./logo";
import { MenuBar } from "./menu-bar";

const SettingsMenu = () => {
    return (
        <section className="w-[258px] h-screen px-4 py-5 max-[769px]:p-0 flex flex-col min-[769px]:gap-4 
            max-[769px]:w-full min-[1800px]:w-[260px] max-[769px]:bg-neutral-100">
            <Logo  />
            <div className="flex flex-col gap-4 h-full px-4 py-6 min-sm:py-6 min-sm:px-8 bg-neutral-0 rounded-t-10">
                <p className="text-preset-1">Settings</p>
                <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2 py-2 rounded-6">
                        <IconSun stroke="stroke-neutral-700" className="w-5 h-5 min-[1800px]:w-7 min-[1800px]:h-7" />
                        <p className="text-preset-4">Color Theme</p>
                    </div>
                    <div className="flex items-center gap-2 py-2 rounded-6">
                        <IconFont stroke="fill-neutral-700" className="w-5 h-5 min-[1800px]:w-7 min-[1800px]:h-7" />
                        <p className="text-preset-4">Color Theme</p>
                    </div>
                    <div className="flex items-center gap-2 py-2 rounded-6">
                        <IconLock stroke="stroke-neutral-700" className="w-5 h-5 min-[1800px]:w-7 min-[1800px]:h-7" />
                        <p className="text-preset-4">Color Theme</p>
                    </div>
                    <hr className="text-neutral-200" />
                    <div className="flex items-center gap-2 py-2 rounded-6">
                        <IconLogout stroke="stroke-neutral-700" className="w-5 h-5 min-[1800px]:w-7 min-[1800px]:h-7" />
                        <p className="text-preset-4">Color Theme</p>
                    </div>
                </div>
            </div>
            <MenuBar />
        </section>
    );
}

export default SettingsMenu;