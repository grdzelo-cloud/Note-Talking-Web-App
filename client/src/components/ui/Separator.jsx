import React from 'react'
import {cn} from "@/hooks/cn.js";

export default function Separator({className}) {
    return <div className={cn("border-neutral-200 border-1", className)}/>
}
