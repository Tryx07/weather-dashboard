function IconText ({ Icon, IconSize = "5",  Text, classNameWrapper, classNameText = "text-base" }) {

    /* Icon: Name of Lucide Icon  (Curly Brackets e.g. {Clock})
    *  IconSize: tailwind utilities for width and height with fallback 5 (String)
    *  Text: text to display (String)
    *  classNameWrapper: edit tailwind utilities for wrapper div (String)
    *  classNameText: edit tailwind utilities for text (text-base, -sm, -md, -lg) with fallback "base" (String) */

    return (
        <div className={`flex items-center gap-2 ${classNameWrapper}`}>
            <Icon className={`w-${IconSize} h-${IconSize}`} />
            <span className={`${classNameText}`}>{Text}</span>
        </div>
    );
}

export default IconText;