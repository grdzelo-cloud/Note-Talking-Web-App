import { Tag } from "./tag";

export const Note = ({ note, isBorder, handleClick }) => {
    return (
        <>
            <div className={`w-full bg-${note.isSelected ? "neutral-100" : "neutral-0"}
            p-2 flex flex-col gap-3 rounded-md ${note.isSelected && "mb-2"} duration-300 transition ease-in-out`}
            onClick={() => handleClick(note.id)}>
                <p className="text-neutral-950 text-present-3">{note.title}</p>
                <div className="flex gap-1">
                    {/* <p className="text-present-6 text-neutral-950 bg-neutral-200 px-[6px] py-[2px] rounded-md">Dev</p>
                <p className="text-present-6 text-neutral-950 bg-neutral-200 px-[6px] py-[2px] rounded-md">React</p> */}
                    {
                        note.tags.map((curValue, index) => {
                            return <Tag key={index} tagText={curValue} />;
                        })
                    }
                </div>
                <p className="text-present-6 text-neutral-700">{note.date}</p>
            </div>
            {
                (!note.isSelected && isBorder) && <div className="w-full h-[1px] border border-neutral-200 my-1 duration-300 transition ease-in-out"></div>
            }
        </>
    );
}