import { useState } from "react";
import Button from "./button";
import { Note } from "./note";

// const texts = ["React Performance Optimization", "Japan Travel Planning", "Favorite Pasta Recipes",
//     "TypeScript Migration Guide", "Weekly Workout Plan", "Gift Ideas"];

const notes = [
    { id: 1, title: "React Performance Optimization", tags: ["Dev", "React"], date: "29 Oct 2024", isSelected: true },
    { id: 2, title: "Japan Travel Planning", tags: ["Travel", "Personal"], date: "28 Oct 2024", isSelected: false },
    { id: 3, title: "Favorite Pasta Recipes", tags: ["Cooking", "Recipes"], date: "27 Oct 2024" },
    { id: 4, title: "TypeScript Migration Guide", tags: ["Dev", "React", "TypeScript"], date: "26 Oct 2024", isSelected: false },
    { id: 5, title: "Weekly Workout Plan", tags: ["Dev", "React"], date: "25 Oct 2024", isSelected: false },
    { id: 6, title: "Gift Ideas", tags: ["Personal", "Shopping"], date: "20 Oct 2024", isSelected: false },
    { id: 7, title: "Gift Ideas", tags: ["Personal", "Shopping"], date: "20 Oct 2024", isSelected: false },
    { id: 8, title: "Gift Ideas", tags: ["Personal", "Shopping"], date: "20 Oct 2024", isSelected: false },
    { id: 9, title: "Gift Ideas", tags: ["Personal", "Shopping"], date: "20 Oct 2024", isSelected: false },
    { id: 10, title: "Gift Ideas", tags: ["Personal", "Shopping"], date: "20 Oct 2024", isSelected: false },
]

export const NoutsBar = () => {
    const [notesList, setNotesList] = useState(notes);

    const handleClick = (noteId) => {
        setNotesList(prev => prev.map(curValue => curValue.id === noteId? { ...curValue, isSelected: true } : { ...curValue, isSelected: false }));
    }

    return (
        <section className="w-[290px] h-screen bg-neutral-0 pl-8 pr-4 py-5 flex flex-col gap-4 overflow-y-auto 
        max-[769px]:w-full">
            <Button>+ Create New Note</Button>
            <div>
                {/* <div className="w-full bg-neutral-100 p-2 flex flex-col gap-3 rounded-md">
                    <p className="text-neutral-950 text-present-3">React Performance Optimization</p>
                    <div className="flex gap-1">
                        <p className="text-present-6 text-neutral-950 bg-neutral-200 px-[6px] py-[2px] rounded-md">Dev</p>
                        <p className="text-present-6 text-neutral-950 bg-neutral-200 px-[6px] py-[2px] rounded-md">React</p>
                    </div>
                    <p className="text-present-6 text-neutral-700">29 Oct 2024</p>
                </div> */}
                {
                    notesList.map((curValue, index)=> {
                        return <Note key={index} note={curValue} isBorder={index !== notesList.length - 1} handleClick={handleClick} />
                    })
                }
            </div>
        </section>
    );
}