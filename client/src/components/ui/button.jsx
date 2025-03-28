import { clsx } from 'clsx';

export const Button = ({ disabled, children, variant, className }) => {
    return (
        <button
            disabled={disabled}
            className={clsx(
                "disabled:bg-slate-100 disabled:text-slate-300 disabled:border-slate-100 disabled:cursor-not-allowed",
                "transition-all duration-100 px-[16px] py-[12px] border-2 focus:outline-offset-2 rounded-lg focus:outline-2  cursor-pointer bg-blue-500 hover:bg-blue-700  text-xs text-present-4", {
                'focus:outline-offset-2 focus:outline-2 focus:outline-neutral-400 focus:border-neutral-950 hover:border-2  border-neutral-300 hover:border-neutral-100 hover:bg-neutral-100 bg-white hover:text-neutral-600 text-neutral-950 ': variant === 'border',
                'focus:text-neutral-950 focus:bg-white focus:outline-offset-2 focus:outline-2 focus:outline-neutral-400 hover:text-neutral-950 focus:border-neutral-950 hover:border-2 hover:border-neutral-300 border-neutral-100 bg-neutral-100 hover:bg-white  text-neutral-600 ': variant === 'secondary',
            }, className)}
        >{children}</button>);
}