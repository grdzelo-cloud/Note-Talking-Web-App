import { useState } from "react";
import IconArchive from "../svg/IconArchive";
import IconChevronRight from "../svg/IconChevronRight";
import IconHome from "../svg/IconHome";
import Logo from "./logo";
import SidebarItem from "./sidebar-item";
import React from "react";
import { MenuBar } from "./menu-bar";

const tagsList = ["Dev", "Fitness", "Health", "Personal", "React", "Recipes", "Shopping", "Travel", "Cooking", "TypeScript", "TypeScript", "TypeScript", "TypeScript", "TypeScript", "TypeScript", "TypeScript", "TypeScript", "TypeScript", "TypeScript", "TypeScript", "TypeScript", "TypeScript", "TypeScript", "TypeScript", "TypeScript", "TypeScript", "TypeScript", "TypeScript", "TypeScript", "TypeScript", "TypeScript", "TypeScript", "TypeScript", "Lomi"];

export const SidebarNavigation = () => {
    const [tagSelect, setTagSelect] = useState("");
    // უნდა გავასწორო პადინგები ტელეფონის და ტაბლეტის ზომებზე(ძირითადად logo-ს პადინგები)
    return (
        <section className="w-[272px] h-full overflow-y-hidden px-4 py-5 max-[769px]:p-0 flex flex-col min-[769px]:gap-4 
            max-[769px]:w-full min-[1800px]:w-[300px] max-[769px]:bg-neutral-100">
            <Logo />
            <div className="flex flex-col h-full gap-2 max-[769px]:gap-4 max-sm:px-4 max-sm:py-5 max-[769px]:px-8 max-[769px]:py-4 bg-neutral-0 rounded-t-10 overflow-y-auto">
                <div className={`flex justify-between items-center gap-2 px-3 py-[10px] rounded-8 bg-neutral-${tagSelect === "All Notes" ? "100" : "0"}
                ${tagSelect === "All Notes" ? "" : "cursor-pointer"} max-[769px]:hidden`}
                    onClick={() => setTagSelect("All Notes")}>
                    <div className="flex items-center gap-2">
                        <IconHome stroke={tagSelect === "All Notes" ? "fill-blue-500" : "fill-neutral-700"} className="w-5 h-5 min-[1800px]:w-7 min-[1800px]:h-7" />
                        <p className={`text-preset-4 min-[1800px]:text-preset-3 text-neutral-${tagSelect === "All Notes" ? "950" : "700"}`}>All Notes</p>
                    </div>
                    {
                        tagSelect === "All Notes" && <IconChevronRight className="h-5 min-[1800px]:h-6" />
                    }
                </div>
                <div className={`flex justify-between items-center gap-2 px-3 py-[10px] rounded-8 bg-neutral-${tagSelect === "Archived Notes" ? "100" : "0"}
                ${tagSelect === "Archived Notes" ? "" : "cursor-pointer"} max-[769px]:hidden`}
                    onClick={() => setTagSelect("Archived Notes")}>
                    <div className="flex items-center gap-2">
                        <IconArchive stroke={tagSelect === "Archived Notes" ? "stroke-blue-500" : "stroke-neutral-700"} className="w-5 h-5 min-[1800px]:w-7 min-[1800px]:h-7" />
                        <p className={`text-preset-4 min-[1800px]:text-preset-3 text-neutral-${tagSelect === "Archived Notes" ? "950" : "700"}`}>Archived Notes</p>
                    </div>
                    {
                        tagSelect === "Archived Notes" && <IconChevronRight className="h-5 min-[1800px]:h-6" />
                    }
                </div>
                <hr className="text-neutral-500 max-[769px]:hidden" />
                <p className="px-2 text-neutral-500 text-preset-4 min-[1800px]:text-preset-3 max-[769px]:text-preset-1 max-[769px]:text-neutral-950">Tags</p>
                <div className="flex flex-col gap-1">
                    {
                        tagsList.map((curValue, index) => {
                            return (
                                <React.Fragment key={index}>
                                    <SidebarItem item={curValue} tagSelect={tagSelect} setTagSelect={setTagSelect} />
                                    {
                                        index !== tagsList.length - 1 && <hr className="text-neutral-200 min-[769px]:hidden" />
                                    }
                                </React.Fragment>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    );
}