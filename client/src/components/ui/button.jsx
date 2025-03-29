import {clsx} from 'clsx';
import {cn} from "@/hooks/cn.js";

export const Button = ({disabled, children, variant = "primary", className}) => {
    return (
        <button
            disabled={disabled}
            className={cn(
                "disabled:bg-slate-100 disabled:text-slate-300 disabled:border-slate-100 disabled:cursor-not-allowed",
                "transition-all duration-100 px-[16px] py-[12px] focus:outline-offset-2 rounded-lg focus:outline-[8px] cursor-pointer text-xs font-medium", {
                    'focus:outline-offset-2 focus:outline-2 border focus:outline-neutral-400 focus:border-neutral-950 border-neutral-300 hover:border-neutral-0 hover:bg-neutral-100 bg-white hover:text-neutral-600 text-neutral-950 ': variant === 'border',
                    'focus:text-neutral-950 focus:bg-white focus:outline-offset-2 focus:outline-2 focus:outline-neutral-400 text-neutral-600 hover:text-neutral-950 focus:border-neutral-950 hover:border-2 hover:border-neutral-300 bg-neutral-100 border-2 border-neutral-100 hover:bg-neutral-0': variant === 'secondary',
                    'focus:text-white focus:bg-blue-600 bg-blue-500 focus:outline-offset-2 focus:outline-2 focus:outline-neutral-400 hover:bg-blue-700 border-neutral-0 text-neutral-0 font-medium': variant === 'primary',
                    'focus:text-white focus:bg-red-500 bg-red-500 focus:outline-offset-2 focus:outline-2 focus:outline-neutral-400 hover:bg-red-700 border-neutral-0 text-neutral-0 font-medium': variant === 'destructive',
                }, className,
            )}
        >{children}</button>);
}