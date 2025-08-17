export default function Selection({ activeKey, onClick, title, children }) {
    return (
        // every button gets a Selection rect -> no position calculation, reduces reflow
        <li className="relative w-full h-28 flex items-center justify-center list-none">
            <div
                className={`absolute inset-x-1 h-full rounded-2xl
                    bg-stone-100
                    shadow-[inset_5px_5px_13px_0px_rgba(135,138,133,0.90)]
                    shadow-[inset_-5px_-5px_10px_0px_rgba(255,255,255,0.90)]
                    shadow-[inset_5px_-5px_10px_0px_rgba(135,138,133,0.20)]
                    shadow-[inset_-5px_5px_10px_0px_rgba(135,138,133,0.20)]
                    dark:bg-transparent dark:border-[3px] dark:border-fuchsia-200
                    dark:backdrop-blur-[20px] dark:shadow-[0px_0px_30px_5px_rgba(4,30,123,0.50)]
                    transition duration-300 ease-in-out
                    ${activeKey === title ? "opacity-100 scale-100" : "opacity-0 scale-95"}
                    `}
            />
            <button
                onClick={onClick}
                className="relative z-10 w-full h-full flex items-center justify-center
                   text-neutral-800 dark:text-neutral-200"
                title={title}
            >
                {/* for Icons and further Styling */}
                {children}
            </button>
        </li>
    );
}