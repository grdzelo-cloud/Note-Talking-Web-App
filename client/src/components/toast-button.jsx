import { toastConstants } from "@/constants/index.js";
import useToast from "../store/toast";
import { Link } from "react-router-dom";
import { useEffect } from "react";



export default function ToastButton() {
    const { popup, isClose, variant } = useToast()
    useEffect(() => {
        if (!isClose) {
            const timer = setInterval(() => {
                popup()
            }, 3000)

            return () => clearTimeout(timer)
        }
    })
    const handleClose = () => {
        popup()
    }
    return (
        <div
            className={`absolute bottom-0  ${isClose ? "invisible opacity-0 translate-x-full right-0" : "right-1/2 opacity-100 visible"} duration-300 transition-all translate-x-1/2 max-w-[390px] w-full`}>
            {toastConstants.map((item, index) => (
                variant === item.variant && (
                    <div
                        key={index}
                        className={`duration-500 transition-all flex justify-between items-start p-100 border-1 border-neutral-200 rounded-8`}>
                        <div className="flex gap-100 items-center">
                            <IconCheckmark stroke="fill-green-500"
                                className="size-200" />
                            <p className="text-preset-6  text-neutral-950">{item.variant}</p>
                        </div>
                        <div className="flex gap-100">
                            <Link to={item?.link}><p className="text-preset-6 text-neutral-950 underline">{item?.label}</p></Link>
                            <div onClick={() => handleClose()} className="flex gap-100">
                                <IconCross stroke={"stroke-neutral-400"} className="size-200 cursor-pointer" />
                            </div>
                        </div>
                    </div>
                )
            ))}
        </div>
    )
}
