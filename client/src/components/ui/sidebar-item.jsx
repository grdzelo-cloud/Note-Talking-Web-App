import IconChevronRight from "../svg/IconChevronRight";
import IconTag from "../svg/IconTag";

const SidebarItem = ({ item, tagSelect, setTagSelect }) => {
    return (
        <>
            <div className={`flex justify-between items-center gap-2 min-[769px]:px-3 py-[10px] rounded-8 bg-neutral-${item === tagSelect ? "100" : "0"}
            ${item === tagSelect ? "" : "cursor-pointer"}`}
                onClick={() => setTagSelect(item)}>
                <div className="flex items-center gap-2">
                    <IconTag stroke={item === tagSelect ? "stroke-blue-500" : "stroke-neutral-700"} className="w-5 h-5 min-[1800px]:w-7 min-[1800px]:h-7" />
                    <p className="text-preset-4 min-[1800px]:text-preset-3">{item}</p>
                </div>
                {
                    item === tagSelect && <IconChevronRight className="h-5 min-[1800px]:h-6" />
                }
            </div>
        </>
    );
}

export default SidebarItem;