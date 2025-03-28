import IconArchive from "../svg/IconArchive.jsx";

export default function Button({children, variant}) {
    return (
        <>
            {variant === 'secondary' ? (
                <button className="secondary-btn">{children}</button>
            ) : variant === 'border' ? (
                <button className="border-btn flex-center">
                    {/*<IconRestore className="icon" />*/}
                    {children}
                    <IconArchive color={"stroke-blue-400"}/>
                </button>
            ) : (
                <button>{children}</button>
            )}
        </>
    );
}