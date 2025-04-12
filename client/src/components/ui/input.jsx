import React, {useState} from 'react'
import {cn} from "@/hooks/cn.js";
import IconShowPassword from "@/components/svg/IconShowPassword.jsx";
import IconHidePassword from "@/components/svg/IconHidePassword.jsx";

export default function Input({variant = "default", ...props}) {
    const [showPassword, setShowPassword] = useState(false)
    const [hidePasswordIcon, setHidePasswordIcon] = useState(false)
    const handleShowPassword = () => {
        setShowPassword(!showPassword)
        setTimeout(() => setShowPassword(false), 2000)
    }
    const handleShowPasswordIcon = (e) => {
        if (e.target.value === "") {
            setHidePasswordIcon(true)
        } else {
            setHidePasswordIcon(false)
        }
    }
    return (
        <>
            <input
                {...props}
                onChange={handleShowPasswordIcon}
                type={((variant === "forgot-password") && (showPassword ? "text" : "password")) || props.type}
                className={cn(
                    "relative disabled:bg-neutral-50 disabled:text-neutral-500",
                    {
                        "": variant === 'default',
                    }
                )}/>
            {variant === "forgot-password" && (
                <div
                    className={`absolute right-0 mt-2 mr-2 cursor-pointer ${hidePasswordIcon && "hidden"}`}
                    onClick={handleShowPassword}

                >
                    {(!showPassword )? <IconHidePassword stroke="stroke-neutral-500"/> :
                        <IconShowPassword stroke="fill-neutral-500"/>}
                </div>
            )}

        </>

    )
}
