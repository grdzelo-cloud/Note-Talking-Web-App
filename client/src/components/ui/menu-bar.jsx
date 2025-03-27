import homeIcon from "@/assets/images/icon-home.svg";
import searchIcon from "@/assets/images/icon-search.svg";
import archiveIcon from "@/assets/images/icon-archive.svg";
import tagIcon from "@/assets/images/icon-tag.svg";
import settingsIcon from "@/assets/images/icon-settings.svg";

export const MenuBar = () => {
    return (
        <nav className="w-full px-4 sm:px-8 py-3 bg-neutral-0">
            <ul className="flex justify-between">
                <li className="flex flex-col justify-center items-center w-full py-1 md:px-[1px] bg-blue-50 rounded-sm">
                    <img src={homeIcon} alt="Home icon" />
                    <p className="max-sm:hidden text-neutral-600 text-xs">Home</p>
                </li>
                <li className="max-sm:hidden w-full"><div className="w-[1px] h-full border border-neutral-100 mx-auto"></div></li>
                <li className="flex flex-col justify-center items-center w-full py-1 md:px-[1px]">
                    <img src={searchIcon} alt="Search icon" />
                    <p className="max-sm:hidden text-neutral-600 text-xs">Search</p>
                </li>
                <li className="max-sm:hidden w-full"><div className="w-[1px] h-full border border-neutral-100 mx-auto"></div></li>
                <li className="flex flex-col justify-center items-center w-full py-1 md:px-[1px]">
                    <img src={archiveIcon} alt="Archive icon" />
                    <p className="max-sm:hidden text-neutral-600 text-xs">Archived</p>
                </li>
                <li className="max-sm:hidden w-full"><div className="w-[1px] h-full border border-neutral-100 mx-auto"></div></li>
                <li className="flex flex-col justify-center items-center w-full py-1 md:px-[1px]">
                    <img src={tagIcon} alt="Tag icon" />
                    <p className="max-sm:hidden text-neutral-600 text-xs">Tags</p>
                </li>
                <li className="max-sm:hidden w-full"><div className="w-[1px] h-full border border-neutral-100 mx-auto"></div></li>
                <li className="flex flex-col justify-center items-center w-full py-1 md:px-[1px]">
                    <img src={settingsIcon} alt="Settings icon" />
                    <p className="max-sm:hidden text-neutral-600 text-xs">Settings</p>
                </li>
            </ul>
        </nav>
    );
}