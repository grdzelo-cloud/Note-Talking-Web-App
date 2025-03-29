import React, {useEffect, useState} from 'react'
import {modalConstants} from "@/constants/index.js"
import Separator from "@/components/ui/Separator.jsx"
import {Button} from "@/components/ui/button.jsx"
import {IconRestore} from "@/components/svg/index.js"

export default function Alert({isOpen, setIsOpen, func, variant = "delete"}) {
    const handleClose = (e) => {
        setIsOpen(false)
    }
    const handleSubmit = (e) => {
        setIsOpen(false)
        func()
    }
    return (<>
            <div
                role="dialog"
                className={`transition-colors duration-150 bg-black/40 w-full h-full fixed top-0 left-0 z-50 p-2 ${!isOpen ? "invisible pointer-events-none" : "visible"}`}>
                <div className="w-full h-full p-2 fixed absolute-center">
                    <div
                        className={`${!isOpen ? "scale-95 opacity-0 cursor-none" : "scale-100 opacity-100"} transition-all duration-150 absolute-center h-fit w-full lg:max-w-[440px] sm:max-w-[343px] max-w-[300px]  bg-neutral-0 border-neutral-200 border-1 rounded-2xl flex gap-4 text-preset-3  items-start`}>
                        <div className="w-full ">
                            <div>
                                <div className="flex items-start gap-4 p-4xl">
                                    <div className="rounded-lg p-lg bg-neutral-100">
                                        {variant === "delete" ? modalConstants[0].icon() : modalConstants[1].icon()}
                                    </div>
                                    <div className={"flex flex-col gap-1.5"}>

                                <span
                                    className="text-preset-3">{variant === "delete" ? modalConstants[0].title : modalConstants[1].title}</span>
                                        <p className={"max-w-[344px]"}>{variant === "delete" ? modalConstants[0].paragraph : modalConstants[1].paragraph}</p>
                                    </div>
                                </div>
                                <Separator/>
                                <div
                                    className="flex w-full justify-end gap-4 p-4">
                                    <div
                                        onClick={(e) => handleClose(e)}
                                    >

                                        <Button
                                            type="button"
                                            variant={"border"}>{variant === "delete" ? modalConstants[0].cancelButtonText : modalConstants[1].cancelButtonText}</Button>
                                    </div>
                                    <div
                                        onClick={(e) => handleSubmit(e)}
                                    >
                                        <Button
                                            type={"button"}
                                            className={"flex-center gap-2"}
                                            variant={variant === "delete" ? "destructive" : "primary"}>
                                            {/*{(<IconRestore className={"animate-spin"} color={"fill-white"}/>)}*/}
                                            {variant === "delete" ? modalConstants[0].deleteButtonText : modalConstants[1].deleteButtonText}
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>

    )
}
