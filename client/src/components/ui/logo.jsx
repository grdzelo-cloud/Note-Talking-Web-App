import IconLogo from "../svg/IconLogo.jsx";

export default function Logo({ dark, className }) {
    return (
        <div className={`w-full max-sm:px-4 py-3 max-sm:py-3 max-[769px]:px-8 max-[769px]:py-4 ${className}`}>
            <IconLogo dark={dark} />
        </div>
    );
}
