import IconHome from "../svg/IconHome.jsx";
import IconSearch from "../svg/IconSearch.jsx"
import IconArchive from "../svg/IconArchive.jsx";
import IconTag from "../svg/IconTag.jsx";
import IconSettings from "../svg/IconSettings.jsx";

export const MenuBar = () => {
    return (
        <nav className="w-full px-4 sm:px-8 py-3 bg-neutral-0 min-[769px]:hidden">
            <ul className="flex justify-between">
                <li className="flex flex-col justify-center items-center w-full py-1 md:px-[1px] bg-blue-50 rounded-sm">
                    <IconHome stroke="fill-blue-500" />
                    <p className="max-sm:hidden text-neutral-600 text-xs">Home</p>
                </li>
                <li className="max-sm:hidden w-full"><div className="w-[1px] h-full border border-neutral-100 mx-auto"></div></li>
                <li className="flex flex-col justify-center items-center w-full py-1 md:px-[1px]">
                    <IconSearch />
                    <p className="max-sm:hidden text-neutral-600 text-xs">Search</p>
                </li>
                <li className="max-sm:hidden w-full"><div className="w-[1px] h-full border border-neutral-100 mx-auto"></div></li>
                <li className="flex flex-col justify-center items-center w-full py-1 md:px-[1px]">
                    <IconArchive />
                    <p className="max-sm:hidden text-neutral-600 text-xs">Archived</p>
                </li>
                <li className="max-sm:hidden w-full"><div className="w-[1px] h-full border border-neutral-100 mx-auto"></div></li>
                <li className="flex flex-col justify-center items-center w-full py-1 md:px-[1px]">
                    <IconTag />
                    <p className="max-sm:hidden text-neutral-600 text-xs">Tags</p>
                </li>
                <li className="max-sm:hidden w-full"><div className="w-[1px] h-full border border-neutral-100 mx-auto"></div></li>
                <li className="flex flex-col justify-center items-center w-full py-1 md:px-[1px]">
                    <IconSettings />
                    <p className="max-sm:hidden text-neutral-600 text-xs">Settings</p>
                </li>
            </ul>
        </nav>
    );
}