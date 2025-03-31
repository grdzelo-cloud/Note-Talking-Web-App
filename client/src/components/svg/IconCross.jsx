export default function IconCross({stroke, className}) {
    return (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" className={className} viewBox="0 0 24 24">
        <path className={stroke || 'stroke-slate-950'} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
              d="m6 6 12 12M18 6 6 18"/>
    </svg>)
}